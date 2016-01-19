module.exports = function(gulp, paths, SRC, WWW, prefixer, rename, minifyCss, sass) {
    'use strict';

    /*
      Compile sass to css with source maps
      then prefix
      -> ionic.app.css
      then minify
      -> ionic.app.min.css
    */
    gulp.task('sass', function(done) {
        gulp.src(paths.sass.main, {cwd: SRC})
            .pipe(sass({
                errLogToConsole: true,
                sourceComments: 'map'
            }).on('error', sass.logError))
            .pipe(prefixer())
            .pipe(gulp.dest(paths.css, {cwd: WWW}))
            .pipe(minifyCss({
                keepSpecialComments: 0
            }))
            .pipe(rename({ extname: '.min.css' }))
            .pipe(gulp.dest(paths.css, {cwd: WWW}))
            .on('end', done);
    });
};
