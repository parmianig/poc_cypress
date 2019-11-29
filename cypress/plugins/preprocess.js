const webpack = require('@cypress/webpack-preprocessor')
const cucumber = require('cypress-cucumber-preprocessor').default

const options = {
 webpackOptions: require("../webpack.config.js"),
 cucumber: cucumber()
};

module.exports = webpack(options)