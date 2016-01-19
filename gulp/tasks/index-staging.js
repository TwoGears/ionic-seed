module.exports = function(gulp) {
    'use strict';

    gulp.task('indexStaging', ['staging'], function() {
        gulp.start('index');
    });
};
