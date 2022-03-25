var gulp = require("gulp");
var browserify = require("browserify");
var source = require("vinyl-source-stream");
var tsify = require("tsify");

async function buildHTML()
{
	return gulp.src(["index.html"]).pipe(gulp.dest("dist"));
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
      .pipe(gulp.dest("dist"));
}

const build = gulp.parallel(buildHTML, buildJS);

exports.build = build;

exports.default = gulp.series(build);