module.exports = function(gulp) {
    'use strict';

    gulp.task('prod', ['prodEnv', 'js'], function() {
        gulp.start('clean-dev');
    });
};
