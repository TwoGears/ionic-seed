module.exports = function(gulp, paths, SRC, WWW, dev, ngConfig) {
    'use strict';

    // Switches to development environment:
    // Uncomments/comments files in index.html
    // Makes the app.env.js file with prod settings
    gulp.task('prodEnv', function() {
        gulp.src(paths.index, {cwd: SRC})
            .pipe(dev(false))
            .pipe(gulp.dest(SRC));

        gulp.src(paths.env.input)
            .pipe(ngConfig('APPNAME.env', {
                createModule: false,
                environment: 'prod'
            }))
            .pipe(gulp.dest(paths.env.output, {cwd: SRC}));
    });
};
