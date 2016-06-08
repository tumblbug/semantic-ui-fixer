"use strict";

import gulp from "gulp"
import babel from "gulp-babel"
import replace from "gulp-replace"

gulp.task("default", () => {
  return gulp.src("src/index.js")
  .pipe(babel())
  .pipe(replace("exports.default", "module.exports"))
  .pipe(gulp.dest("./"))
})
