module.exports = function(gulp) {
    'use strict';

    // Bumps cordova app version
    gulp.task('bump', require('gulp-cordova-bump'));
};
