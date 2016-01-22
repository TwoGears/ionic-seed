module.exports = function(gulp) {
    'use strict';

    // Switches to prod environment and then moves the index.html to WWW
    gulp.task('indexProd', ['prod'], function() {
        gulp.start('index');
    });
};
