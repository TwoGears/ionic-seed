module.exports = function(gulp, paths, SRC, WWW) {
    'use strict';

    gulp.task('img', function() {
        return gulp.src(paths.imgs, {base: SRC, cwd: SRC})
            .pipe(gulp.dest(WWW));
    });
};
