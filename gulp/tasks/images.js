module.exports = function(gulp, paths, SRC, WWW) {
    'use strict';

    // Moves images from SRC to WWW
    gulp.task('img', function() {
        return gulp.src(paths.imgs, {base: SRC, cwd: SRC})
            .pipe(gulp.dest(WWW));
    });
};
