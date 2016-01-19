module.exports = function(gulp) {
    'use strict';

    gulp.task('indexProd', ['prod'], function() {
        gulp.start('index');
    });
};
