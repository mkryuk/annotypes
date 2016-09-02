var gulp = require('./gulp')([
  { name: 'clean', dependencies: [] },
  { name: 'compile', dependencies: ['clean'] },
  { name: 'install.nw', dependencies: [] },
  { name: 'install.sqlite3', dependencies: [] },
  { name: 'minify', dependencies: ['clean'] },
  { name: 'run', dependencies: ['minify'] },
]);

gulp.task('install', ['install.nw', 'install.sqlite3']);
gulp.task('default', ['run']);