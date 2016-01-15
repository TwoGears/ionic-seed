'use strict';

var gulp = require('gulp');
var gutil = require('gulp-util');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');
var sh = require('shelljs');
var bower = require("bower");
var bump = require("gulp-cordova-bump");
var dev = require("gulp-dev");
var htmlmin = require("gulp-htmlmin");
var ngAnnotate = require("gulp-ng-annotate");
var ngTemplates = require("gulp-ng-templates");
var plumber = require("gulp-plumber");
var sourcemaps = require("gulp-sourcemaps");
var uglify = require('gulp-uglify');
var prefixer = require('gulp-autoprefixer');
var gulpNgConfig = require('gulp-ng-config');
var clean = require('del');

var SRC = 'src/';
var WWW = 'www/';

var paths = {
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
};

// Prevent watch from stopping on error
var onError = function (err) {
    gutil.beep();
    console.log(err);
};

// Combined javascript task
gulp.task('js', ['jsapp', 'jscomponents']);

// Move index.html from SRC to WWW
gulp.task('index', function() {
    return gulp.src(paths.index, {cwd: SRC})
        .pipe(gulp.dest(WWW));
});

// Move images from SRC to WWW
gulp.task('img', function() {
    return gulp.src(paths.imgs, {base: SRC, cwd: SRC})
        .pipe(gulp.dest(WWW));
});

// Cache html files into one angular js templates file
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

// Concat, minify and annotate all app.*.js files
gulp.task('jsapp', ['templates'], function() {
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

// Concat, minify and annotate all js files in app/components/**
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

// Watch for changes
// Does not work/breaks when a folder is renamed or deleted
gulp.task('watch', function() {
    gulp.watch(paths.index.input, {cwd: SRC}, ['index']);
    gulp.watch(paths.sass.watch, {cwd: SRC}, ['sass']);
    gulp.watch(paths.templates.input, {cwd: SRC}, ['jsapp']);
    gulp.watch(paths.js.input.components, {cwd: SRC}, ['jscomponents']);
    gulp.watch(paths.imgs, {cwd: SRC}, ['img']);
});

// Install bower packages
gulp.task('install', function() {
  return bower.commands.install()
    .on('log', function(data) {
      gutil.log('bower', gutil.colors.cyan(data.id), data.message);
    });
});

// Switch to development environment
gulp.task('devEnv', function() {
    gulp.src(paths.index.input, {cwd: SRC})
      .pipe(dev(true))
      .pipe(gulp.dest(SRC));

    gulp.src(paths.env.input)
        .pipe(gulpNgConfig('APPNAME.env', {
            createModule: false,
            environment: 'dev'
        }))
        .pipe(gulp.dest(paths.env.output));
});

// Switch to production environment
gulp.task('prodEnv', function() {
    gulp.src(paths.index.input, {cwd: SRC})
        .pipe(dev(false))
        .pipe(gulp.dest(SRC));

    gulp.src(paths.env.input)
        .pipe(gulpNgConfig('APPNAME.env', {
            createModule: false,
            environment: 'prod'
        }))
        .pipe(gulp.dest(paths.env.output, {cwd: SRC}));
});

// Delete debug and non-minified files in WWW
gulp.task('clean-dev', function() {
    return clean(paths.cleanPaths);
});

gulp.task('prod', ['prodEnv', 'js'], function() {
    gulp.start('clean-dev');
});

gulp.task('dev', ['devEnv', 'js', 'sass']);

gulp.task('indexDev', ['dev'], function() {
    gulp.start('index');
});

gulp.task('indexProd', ['prod'], function() {
    gulp.start('index');
});

// Install bower libraries, compile js and sass, move to and create WWW folder
gulp.task('setup', ['install'], function() {
    gulp.start('indexDev');
    gulp.start('sass');
    gulp.start('img');
});

// Updates the app version number
// Usage:
// $ gulp bump --patch
// $ gulp bump --minor
// $ gulp bump --major
// $ gulp bump --setversion=2.1.0
gulp.task('bump', require('gulp-cordova-bump'));

gulp.task('default', ['watch']);
