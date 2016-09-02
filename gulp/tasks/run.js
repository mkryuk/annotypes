let run = require('gulp-run');
const path = require('path');
let getNwConfig = require('../nw.config');

module.exports = function () {
    let nwConfig = getNwConfig(true);
    let nwExecutable = '.' + path.sep + 'bin' + path.sep + nwConfig.nwVersionName + path.sep + 'nw';
    if (nwConfig.nwPlatform !== 'win') {
        run('chmod +x ' + nwExecutable)
            .exec();
    }
    return run(nwExecutable + ' .')
        .exec();
};