let gulp = require('gulp');
let ts = require('gulp-typescript');
let tsProject = ts.createProject("tsconfig.json");
let sourcemaps = require('gulp-sourcemaps');

module.exports = function () {
  let tsResult = tsProject
    .src()
    .pipe(sourcemaps.init())
    .pipe(ts(tsProject));

  return tsResult.js
    .pipe(sourcemaps.write('./', {
      includeContent: false,
      sourceRoot: '/app/'
    }))
    .pipe(gulp.dest("compiled"));
};