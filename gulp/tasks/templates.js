module.exports = function(gulp, paths, SRC, WWW, htmlmin, ngTemplates) {
    'use strict';

    // Caches html files into one angular js templates file
    gulp.task('templates', function() {
        return gulp.src(paths.templates.input, {cwd: SRC})
            .pipe(htmlmin({collapseWhitespace: true}))
            .pipe(ngTemplates({
                filename: 'app.templates.js',
                module: 'APPNAME.templates',
                standalone: false
            }))
            .pipe(gulp.dest(paths.templates.output, {cwd: SRC}));
    });
};
