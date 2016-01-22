module.exports = function(gulp) {
    'use strict';

    // Switches to dev environment and compiles js and sass
    gulp.task('dev', ['devEnv', 'js', 'sass']);
};
