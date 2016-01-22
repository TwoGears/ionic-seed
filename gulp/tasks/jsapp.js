module.exports = function(gulp, paths, SRC, WWW, util, ngAnnotate, plumber, rename, uglify, sourcemaps, concat, log, chalk) {
    'use strict';

    // // Prevents watch from stopping on error
    var onError = function (err) {
        util.beep();
        log(chalk.red('Syntax error:', err));
    };

    // Concats, minifies and annotates all app.*.js files
    // Makes two files:
    //     app.debug.js is not minified and has sourcemaps
    //     app.js is minified
    gulp.task('jsapp', function() {
        return gulp.src(paths.js.input.app, {cwd: SRC})
            .pipe(plumber({errorHandler: onError}))
            .pipe(sourcemaps.init())
            .pipe(concat('app.debug.js'))
            .pipe(sourcemaps.write())
            .pipe(ngAnnotate())
            .pipe(gulp.dest(paths.js.output, {cwd: WWW}))
            .pipe(uglify())
            .pipe(rename('app.js'))
            .pipe(gulp.dest(paths.js.output, {cwd: WWW}));
    });
};
