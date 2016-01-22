module.exports = function(gulp) {
    'use strict';

    // Installs bower libraries, compiles js and sass, moves to and creates WWW folder
    gulp.task('setup', ['install'], function() {
        gulp.start('indexDev');
        gulp.start('sass');
        gulp.start('img');
    });
};
