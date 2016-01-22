module.exports = function(gulp) {
    'use strict';

    // Switches to dev environment and then moves the index.html to WWW
    gulp.task('indexDev', ['dev'], function() {
        gulp.start('index');
    });
};
