var gulp = require("gulp");
var browserify = require("gulp-browserify");
var babelify = require( 'babelify' )
var rename = require("gulp-rename");
var uglify = require("gulp-uglify");
var source =  require("vinyl-source-stream");
var sass = require("gulp-sass");
var vueify = require("vueify");


gulp.task("js", function () {
    gulp.src("./resources/app/app.js")
        .pipe(browserify( {
            transform: ["vueify", "babelify"],
        }))
        .pipe(rename("public/build/bundle.js"))
        .pipe(gulp.dest("./"));
}),

    gulp.task("sass", function () {
        gulp.src("./css/*.scss")
            .pipe(sass().on("error", sass.logError))
            .pipe(gulp.dest("./css"));
    });


gulp.task("watch", function () {
    gulp.watch(["./css/*.scss"], ["sass"]);
    gulp.watch("resources/app/**/*.js", ["js"]);
    gulp.watch("resources/app/**/*.vue", ["js"]);
})