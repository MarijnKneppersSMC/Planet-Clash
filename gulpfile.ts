import gulp from "gulp";
import browserify from "browserify";
import source from "vinyl-source-stream";
import tsify from "tsify";
import connect from 'gulp-connect';

async function buildHTML() {
	return gulp.src(["index.html"]).pipe(gulp.dest("dest")).pipe(connect.reload());
}

function buildImage() {
	return gulp.src('images/**')
	.pipe(gulp.dest('dest/images'));
}

function buildAudio() {
	return gulp.src('audio/**')
	.pipe(gulp.dest('dest/audio'));
}

async function buildJS() {
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
		.pipe(gulp.dest("dest"))
		.pipe(connect.reload());
}

function server() {
	connect.server({
		livereload: true,
		root: "dest/"
	});
}

function watch() {
	gulp.watch(["./index.html"], buildHTML);
	gulp.watch(["./scripts/**"], buildJS);
	gulp.watch(["./audio/**"], buildAudio);
	gulp.watch(["./images/**"], buildImage);
}

const build = gulp.parallel(buildHTML, buildJS, buildImage, buildAudio);

exports.build = build;
exports.start = gulp.series(build, gulp.parallel(server, watch));

exports.default = exports.start;