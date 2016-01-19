module.exports = function(gulp, paths, SRC) {
    'use strict';

    gulp.task('watch', function() {
        gulp.watch(paths.index, {cwd: SRC}, ['index']);
        gulp.watch(paths.sass.watch, {cwd: SRC}, ['sass']);
        gulp.watch(paths.js.input.app, {cwd: SRC}, ['jsapp']);
        gulp.watch(paths.templates.input, {cwd: SRC}, ['templates']);
        gulp.watch(paths.js.input.components, {cwd: SRC}, ['jscomponents']);
        gulp.watch(paths.imgs, {cwd: SRC}, ['img']);
    });
};
