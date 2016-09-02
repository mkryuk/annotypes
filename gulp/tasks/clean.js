let gulp = require('gulp');
let del = require('del');

module.exports = function () {
  return del([
    'compiled/**/*',
    'minified/**/*',
  ]);
};