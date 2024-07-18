module.exports = function (config) {
    config.set({
      basePath: '',
      frameworks: ['jasmine', '@angular-devkit/build-angular'],
      plugins: [
        require('karma-jasmine'),
        require('karma-chrome-launcher'),
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
      browsers: ['FirefoxHeadless'],
      customLaunchers: {
            'FirefoxHeadless': {
                base: 'Firefox',
                flags: [
                    '-headless',
                ],
                prefs: {
                    'network.proxy.type': 0
                }
            }
      },
      captureTimeout: 180000,
      singleRun: true
    });
};
