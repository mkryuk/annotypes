let run = require('gulp-run');
module.exports = function () {
  return run("npm install sqlite3 --build-from-source --runtime=node-webkit --target_arch=x64 --target=0.14.7")
    .exec();
};