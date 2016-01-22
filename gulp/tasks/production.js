module.exports = function(gulp) {
    'use strict';

    // Switches to prod environment and compiles js.
    // After that, cleans *.debug.js files and non-minified css
    gulp.task('prod', ['prodEnv', 'js'], function() {
        gulp.start('clean-dev');
    });
};
