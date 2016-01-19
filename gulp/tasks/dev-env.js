module.exports = function(gulp, paths, SRC, WWW, ngConfig, dev) {
    'use strict';

    // Switch to development environment
    gulp.task('devEnv', function() {
        gulp.src(paths.index, {cwd: SRC})
          .pipe(dev(true))
          .pipe(gulp.dest(SRC));

        gulp.src(paths.env.input)
            .pipe(ngConfig('APPNAME.env', {
                createModule: false,
                environment: 'dev'
            }))
            .pipe(gulp.dest(paths.env.output, {cwd: SRC}));
    });
};
