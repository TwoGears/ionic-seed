'use strict';

var gulp = require('gulp');
var gulpDi = require('gulp-di')(gulp, {
    pattern: ['gulp-*', 'gulk.*', 'del', 'bower'],
    rename: {
        'del': 'clean',
        'gulp-autoprefixer': 'prefixer',
    }
})
.provide({
    SRC: 'src/',
    WWW: 'www/',
    paths: {
        sass: {
            main: 'scss/ionic.app.scss',
            watch: ['scss/ionic.app.scss', 'scss/**/*.scss'],
        },
        css: 'css/',
        js: {
            input: {
                app: [
                    'app/app.module.js',
                    'app/app.run.js',
                    'app/app.config.js',
                    'app/app.env.js',
                    'app/app.templates.js',
                    'app/app.routes.js',
                ],
                components: 'app/components/**/*.js'
            },
            output: 'js/'
        },
        env: {
            input: 'app.env.json',
            output: 'app/'
        },
        index: 'index.html',
        templates: {
            input: 'app/components/**/*.html',
            output: 'app/'
        },
        imgs: 'img/**/*',
        cleanPaths: [
            'www/js/*.debug.js',
            'www/css/*.css',
            '!www/css/*.min.css'
        ]
    }
})
.tasks('./gulp/tasks')
.resolve();
