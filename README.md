# Introduction

SmartPay Anywhere Angular 2 App

Currently not much more than the seed project.

`angular2-seed` provided the following features:

- Allows you to painlessly update the seed tasks of your already existing project.
- Ready to go, statically typed build system using gulp for working with TypeScript.
- Production and development builds.
- Sample unit tests with Jasmine and Karma
- ***REMOVED*** code coverage via [istanbul](https://gotwarlost.github.io/istanbul/).
- ***REMOVED*** End-to-end tests with Protractor.
- Development server with Livereload.
- Following the [best practices for your application’s structure](https://github.com/mgechev/angular2-style-guide).
- Manager of your type definitions using [typings](https://github.com/typings/typings).
- Has autoprefixer and css-lint support.
- Basic Service Worker, which implements "Cache then network strategy". ***NOT SURE WE NEED THIS? LEAVE FOR NOW***

# How to start

**Note** that this seed project requires node v4.x.x or higher and npm 2.14.7.

**Here is how to [speedup the build on Windows](https://github.com/mgechev/angular2-seed/wiki/Speed-up-the-build-on-Windows)**.

In order to start use:

```bash
# install the project's dependencies
npm install
# watches your files and uses livereload by default
npm start
# api document for the app
npm run docs

# dev build
npm run build.dev
# qa build
npm run build.qa
# prod build
npm run build.prod
```

_Does not rely on any global dependencies._

# Configuration

Default application server configuration

```javascript
var PORT             = 5555;
var LIVE_RELOAD_PORT = 4002;
var DOCS_PORT        = 4003;
var APP_BASE         = '/';
```

Configure at runtime

```bash
npm start -- --port 8080 --reload-port 4000 --base /my-app/
```


# Running tests

```bash
npm test

# Debug - In two different shell windows
npm run build.test.watch      # 1st window
npm run test.debug            # 2nd window
