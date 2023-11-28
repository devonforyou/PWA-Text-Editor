# 19 PWA Text Editor

## General Info

Our task this week is to build a text editor that runs in the browser. The app is a single page app that meets Progressive Web App criteria. It will feature data persistence techniques that serve as a redundancy in case one of the options is not supported by the browser. The app can also function offline.

We will start with an existing app and implement methods for getting and storing data in an IndexedDB database by using a package called idb, which is a lightweight wrapper around the IndexedDB API. This has methods that are useful for storing and retrieving data.


## Main Technologies Used
[node.js v 20.5.0 LTS](https://node.js.org/) - Node.js® is an open-source, cross-platform JavaScript runtime environment.

[express v 4.18.2](https://www.npmjs.com/package/express) - Fast, unopinionated, minimalist web framework for Node.js.

[nodemon v 2.0.22](https://www.npmjs.com/package/nodemon) - Node.js based application; automatically restarting the node application when file changes in the directory are detected.

[concurrently v 5.2.0](https://www.npmjs.com/package/concurrently) - Run multiple commands concurrently.

[webpack v 5.51.1](https://www.npmjs.com/package/webpack) - Webpack is a module bundler. Its main purpose is to bundle JavaScript files for usage in a browser, yet it is also capable of transforming, bundling, or packaging just about any resource or asset.

[babel v 7.15.0](https://www.npmjs.com/package/@babel/core) - Babel is a toolchain that is mainly used to convert ECMAScript 2015+ code into a backwards compatible version of JavaScript in current and older browsers or environments.

[css-loader v 6.2.0](https://www.npmjs.com/package/css-loader) - The css-loader interprets @import and url() like import/require() and will resolve them.


## Installation

### Prerequisites
* [Node.js](https://node.js.org/)
* [Git](https://git-scm.com/)

### Deployed Application

The application is deployed on Heroku at ().

### Local Installation

If you would prefer to see a local version of the site, follow th steps below: 

1. Clone the [repository]() to your local machine.
2. Go to the root director of the cloned repo in your terminal.
3. Run ==npm run install== to install the dependencies.
4. Run ==npm run build== to build the front-end files.
5. Navigate to (http:/localhost:3001) in your browser to view the site.

## Usage

To use app, type in the text editor. When the editor is not focused, the text is saved to the database. When you load the page, the text is loaded from the database. If you are offline, the text is saved to IndexDB and then synced with the server when you are back online. Install the app by clicking on the install button in the address bar in the browser. It will install the app on your device. You can open the app from your device's home screen.

