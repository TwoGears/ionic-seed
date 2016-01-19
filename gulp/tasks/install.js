module.exports = function(gulp, bower, util) {
    'use strict';

    // Install bower packages
    gulp.task('install', function() {
      return bower.commands.install()
        .on('log', function(data) {
          util.log('bower', util.colors.cyan(data.id), data.message);
        });
    });
};
