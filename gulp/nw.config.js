module.exports = function (dev) {

  //  nwjs-v0.14.7-linux-ia32.tar.gz
  //  nwjs-v0.14.7-linux-x64.tar.gz
  //  nwjs-v0.14.7-osx-x64.zip
  //  nwjs-v0.14.7-win-ia32.zip
  //  nwjs-v0.14.7-win-x64.zip

  /////DEV SDK/////
  //  nwjs-sdk-v0.14.7-linux-ia32.tar.gz
  //  nwjs-sdk-v0.14.7-linux-x64.tar.gz
  //  nwjs-sdk-v0.14.7-osx-x64.zip
  //  nwjs-sdk-v0.14.7-win-ia32.zip
  //  nwjs-sdk-v0.14.7-win-x64.zip

  var nwVersion = '0.14.7';

  var nwPlatform = /^win/.test(process.platform)
    ? 'win' : /^linux/.test(process.platform) ? 'linux' : 'osx';
  var nwArch = /64$/.test(process.arch) ? 'x64' : 'ia32';

  var nwArchiveExt = /^linux/.test(process.platform) ? 'tar.gz' : 'zip';
  var nwVersionName = 'nwjs' + (dev ? '-sdk' : '') + '-v' + nwVersion + '-' + nwPlatform + '-' + nwArch;
  var nwArchiveName = nwVersionName + '.' + nwArchiveExt;

  return {
    nwVersion: nwVersion,
    nwPlatform: nwPlatform,
    nwArchiveExt: nwArchiveExt,
    nwVersionName: nwVersionName,
    nwArchiveName: nwArchiveName,
  };
};