module.exports = function (config) {
    config.set({
      basePath: '',
      frameworks: ['jasmine', '@angular-devkit/build-angular'],
      plugins: [
        require('karma-jasmine'),
        require('karma-firefox-launcher'),
        require('@angular-devkit/build-angular/plugins/karma')
      ],
      client:{
        clearContext: false
      },
      reporters: ['progress'],
      port: 9876,
      colors: true,
      logLevel: config.LOG_INFO,
      autoWatch: true,
      browsers: [],
      captureTimeout: 180000,
      singleRun: true
    });
};
