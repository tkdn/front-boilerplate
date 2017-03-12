const webpackConfig = require('./webpack.config')
webpackConfig.devtool = 'inline-source-map'
delete webpackConfig.entry
delete webpackConfig.output

module.exports = function(config) {
  config.set({
    frameworks: ['mocha', 'sinon'],
    files: [
      {
        pattern: 'test/**/*.spec.js', watched: false
      }
    ],
    exclude: [
    ],
    preprocessors: {
      'test/**/*': ['webpack']
    },
    browsers: ['PhantomJS'],
    webpack: webpackConfig,
    webpackMiddleware: {
      noInfo: true
    }
  })
}
