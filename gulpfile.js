const { src, dest, watch, series } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const purgecss = require("gulp-purgecss");

function buildStyles() {
  return src("./jelly/**/*.scss")
    .pipe(sass())
    .pipe(purgecss({ content: ["*.html"] }))
    .pipe(dest("css"));
  //compiles the sass file and outputs the compiled css files into the css folder
}

function watchTask() {
  watch(["./jelly/**/*.scss", "*.html"], buildStyles); //calls the function buildStyles whenever there are changes in the dependencies listed in the array
}

exports.default = series(buildStyles, watchTask);
