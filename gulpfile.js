var gulp = require("gulp");
var browserify = require("browserify");
var source = require("vinyl-source-stream");
var tsify = require("tsify");
var connect = require('gulp-connect');
var image = require('gulp-image');

async function buildHTML()
{
	return gulp.src(["index.html"]).pipe(gulp.dest("dist")).pipe(connect.reload());
}

function buildImage()
{
	return gulp.src("./images/*").pipe(image({})).pipe(gulp.dest("./dist/images/")).pipe(connect.reload());
}

async function buildJS()
{
	return browserify({
      basedir: ".",
      debug: true,
      entries: ["scripts/main.ts"],
      cache: {},
      packageCache: {},
    })
      .plugin(tsify)
      .bundle()
      .pipe(source("bundle.js"))
      .pipe(gulp.dest("dist"))
	  .pipe(connect.reload());
}

function server()
{
    connect.server({
      livereload: true,
	  root: "./dist/"
    });
}

function watch()
{
	gulp.watch(["./index.html"], buildHTML);
	gulp.watch(["./scripts/*.ts"], buildJS);
	gulp.watch(["./images/*"], buildImage);
}

const build = gulp.parallel(buildHTML, buildJS, buildImage);

exports.build = build;
exports.start = gulp.series(build, gulp.parallel(server, watch));

exports.default = exports.start;