var gulp = require("gulp");
var browserify = require("browserify");
var source = require("vinyl-source-stream");
var tsify = require("tsify");
var server = require('gulp-webserver');
var paths = {
  pages: ["index.html"],
};

gulp.task("build-html", function() {
	return gulp.src(paths.pages).pipe(gulp.dest("dist"));
})

gulp.task("build-js", function() {
	gulp.series(gulp.parallel("copy-html"), function () {
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
  })
})

gulp.task("build", () => {return gulp.parallel("build-html", "build-js")})

gulp.task('server', gulp.series("build", function() {
  return gulp.src('dist')	// <-- your app folder
    .pipe(server({
      livereload: true,
      open: true,
      port: 6000	// set a port to avoid conflicts with other local apps
    }));
}));

gulp.task(
  "default",
  () => {return gulp.series("build");});
