module.exports = function(gulp) {
    'use strict';

    // Combined javascript task
    gulp.task('js', ['templates', 'jscomponents'], function() {
        gulp.start('jsapp');
    });
};
