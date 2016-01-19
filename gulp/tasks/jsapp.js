module.exports = function(gulp, paths, SRC, WWW, util, ngAnnotate, plumber, rename, uglify, sourcemaps, concat) {
    'use strict';

    // // Prevent watch from stopping on error
    var onError = function (err) {
        util.beep();
        console.log(err);
    };

    // Concat, minify and annotate all app.*.js files
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
