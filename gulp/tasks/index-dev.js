module.exports = function(gulp) {
    'use strict';

    gulp.task('indexDev', ['dev'], function() {
        gulp.start('index');
    });
};
