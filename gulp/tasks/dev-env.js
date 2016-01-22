module.exports = function(gulp, paths, SRC, WWW, ngConfig, dev) {
    'use strict';

    // Switches to development environment:
    // Uncomments/comments files in index.html
    // Makes the app.env.js file with dev settings
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
