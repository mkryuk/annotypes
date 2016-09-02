let gulp = require('gulp');
let download = require("gulp-download");
let decompress = require('gulp-decompress');
let getNwConfig = require('../nw.config');

module.exports = function () {
  let nwConfig = getNwConfig(true);
  let path = 'http://dl.nwjs.io/v' + nwConfig.nwVersion + '/' + nwConfig.nwArchiveName;
  console.log('get ' + path);
  return download(path)
    .pipe(decompress())
    .pipe(gulp.dest('./bin'));
};