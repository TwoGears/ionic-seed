module.exports = function(gulp) {
    'use strict';

    // Default gulp task, switches to development and starts the watchers
    gulp.task('default', ['dev', 'watch']);
};
