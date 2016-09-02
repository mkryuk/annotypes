# annotypes

annotypes is a sample project using AngularJS NW.js NodeJS Typescript and SystemJS all at once

### Version
1.0.0

### Tech

annotypes uses a number of open source projects to work properly:

* [AngularJS] - HTML enhanced for web apps!
* [NW.js] - previously known as node-webkit
* [TypeScript] - a typed superset of JavaScript
* [NodeJS] - a JavaScript runtime
* [SystemJS] - universal dynamic module loader - loads ES6 modules, AMD, CommonJS and global scripts in the browser and NodeJS.
* [Gulp] - the streaming build system

### Installation

annotypes requires [NW.js](http://nwjs.io/) to run.

You need Gulp, Typescript and typings installed globally:

```sh
$ npm install -g gulp
$ npm install -g typescript
$ npm install -g typings
```

Then exec this

```sh
$ git clone https://github.com/mkryuk/annotypes.git
$ cd annotypes
$ npm install
$ typings install
```

## Preparations for sqlite3 installation

### You need: 

Visual C++ Build Environment: installed

Option 1: Install Visual C++ Build Tools using the Default Install option. http://landinghub.visualstudio.com/visual-cpp-build-tools

Option 2: Install Visual Studio 2015 (or modify an existing installation) and select Common Tools for Visual C++ during setup. This also works with the free Community and Express for Desktop editions.

Windows Vista / 7 only] requires .NET Framework 4.5.1

Install Python 2.7 (v3.x.x is not supported), and run npm config set python python2.7 (or see below for further instructions on specifying the proper Python version and path.)

Launch cmd, 
```sh
npm config set msvs_version 2015
```

Then install nw-gyp globally

```sh
npm install nw-gyp -g
```

## Install sqlite3

```sh
gulp install.sqlite3
```

Or install it manually

Win x64
```sh
npm install sqlite3 --build-from-source --runtime=node-webkit --target_arch=x64 --target=0.14.7
```

Win x32
```sh
npm install sqlite3 --build-from-source --runtime=node-webkit --target_arch=ia32 --target=0.14.7
```

## Install NW.js
```sh
$ gulp install.nw
```

## Install NW.js and sqlite3 at once
```sh
$ gulp install
```

## Run

```sh
$ gulp run
```

Or just

```sh
$ gulp
```

If you want to cleanup compiled code run

```sh
$ gulp clean
```

   
   [git-repo-url]: <https://bitbucket.org/msstemp/nw-client.git>
   [NodeJS]: <http://nodejs.org>
   [NW.js]: <http://nwjs.io/>
   [AngularJS]: <http://angularjs.org>
   [TypeScript]: <https://www.typescriptlang.org/>
   [Gulp]: <http://gulpjs.com>
   [SystemJS]: <https://github.com/systemjs/systemjs>
