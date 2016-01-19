module.exports = function(gulp, clean, paths) {
    'use strict';

    // Delete debug and non-minified files in WWW
    gulp.task('clean-dev', function() {
        return clean(paths.cleanPaths);
    });
};
