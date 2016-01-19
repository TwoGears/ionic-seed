module.exports = function(gulp) {
    'use strict';

    gulp.task('staging', ['stagingEnv', 'js', 'sass']);
};
