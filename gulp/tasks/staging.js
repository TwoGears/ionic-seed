module.exports = function(gulp) {
    'use strict';

    // Switches to staging environment and compiles js and sass.
    gulp.task('staging', ['stagingEnv', 'js', 'sass']);
};
