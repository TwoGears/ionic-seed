module.exports = function(gulp, paths, SRC, WWW, ngConfig, dev) {
    'use strict';

    // Switches to staging environment
    gulp.task('stagingEnv', function() {
        gulp.src(paths.index, {cwd: SRC})
            .pipe(dev(true))
            .pipe(gulp.dest(SRC));

        gulp.src(paths.env.input)
            .pipe(ngConfig('APPNAME.env', {
                createModule: false,
                environment: 'staging'
            }))
            .pipe(gulp.dest(paths.env.output, {cwd: SRC}));
    });
};
