const { src, dest, watch, series } = require("gulp");
const sass = require("gulp-sass")(require("sass"));

function buildStyles() {
  return src("./jelly/**/*.scss").pipe(sass()).pipe(dest("css"));
  //compiles the sass file and outputs the compiled css files into the css folder
}

function watchTask() {
  watch(["./jelly/**/*.scss"], buildStyles); //calls the function buildStyles whenever there are changes in the dependencies listed in the array
}

exports.default = series(buildStyles, watchTask);
