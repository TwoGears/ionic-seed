module.exports = function(gulp, paths, SRC, WWW) {
    'use strict';

    // Move index.html from SRC to WWW
    gulp.task('index', function() {
        return gulp.src(paths.index, {cwd: SRC})
            .pipe(gulp.dest(WWW));
    });
};
