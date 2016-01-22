module.exports = function(gulp, paths, SRC, WWW, util, ngAnnotate, plumber, rename, uglify, sourcemaps, concat, log, chalk) {
    'use strict';

    // // Prevents watch from stopping on error
    var onError = function (err) {
        util.beep();
        log(chalk.red('Syntax error:', err));
    };

    // Concats, minifies and annotates all js files in app/components/**
    // Makes two files:
    //     app-components.debug.js is not minified and has sourcemaps
    //     app-components.js is minified
    gulp.task('jscomponents', function() {
        return gulp.src(paths.js.input.components, {cwd: SRC})
            .pipe(plumber({errorHandler: onError}))
            .pipe(sourcemaps.init())
            .pipe(concat('app-components.debug.js'))
            .pipe(sourcemaps.write())
            .pipe(ngAnnotate())
            .pipe(gulp.dest(paths.js.output, {cwd: WWW}))
            .pipe(uglify())
            .pipe(rename('app-components.js'))
            .pipe(gulp.dest(paths.js.output, {cwd: WWW}));
    });
};
