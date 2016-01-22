module.exports = function(gulp) {
    'use strict';

    // Switches to staging environment and then moves the index.html to WWW
    gulp.task('indexStaging', ['staging'], function() {
        gulp.start('index');
    });
};
