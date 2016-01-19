module.exports = function(gulp) {
    'use strict';

    // Install bower libraries, compile js and sass, move to and create WWW folder
    gulp.task('setup', ['install'], function() {
        gulp.start('indexDev');
        gulp.start('sass');
        gulp.start('img');
    });
};
