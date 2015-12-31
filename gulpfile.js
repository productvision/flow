const gulp = require('gulp');
const connect = require('gulp-connect');
const bowerFiles = require('main-bower-files');
const inject = require('gulp-inject');
const child = require('child_process');
const fs = require('fs');

var frontendAssets = [
    './index.html',

    './bower.json',

    './module/core/loader/module.js',
    './module/core/loader/**/*.{js,json,css,html}',
    './module/core/app/module.js',
    './module/core/app/**/*.{js,json,css,html}',

    './module/**/module.js',
    './module/**/*.{js,json,css,html}'
];

gulp.task('frontend-assets', function () {
    gulp.src('./index.html')
        .pipe(inject(gulp.src(bowerFiles(), {
            read: false
        }), {
            name: 'bower'
        }))
        .pipe(inject(gulp.src(frontendAssets), {
            read: false
        }))
        .pipe(gulp.dest('.'));
});

gulp.task('frontend-serve', function () {
    connect.server({
        root: '.',
        livereload: true
    });
});

gulp.task('frontend-watch', function () {
    gulp.watch(frontendAssets, ['frontend-assets', 'frontend-reload']);
});

gulp.task('frontend-reload', function () {
    gulp.src('./index.html')
        .pipe(connect.reload());
});


var backendAssets = [
    './config/**/*.{js,json}',
    './server/**/*.{js,json}',
    './package.json'
];

var backendServerProcess;
gulp.task('backend-serve', function () {
    backendServerProcess = child.spawn('node', ['server/server.js']);
    var log = fs.createWriteStream('data/log/server.log', {
        flags: 'a'
    });
    backendServerProcess.stdout.pipe(log);
    backendServerProcess.stderr.pipe(log);
});

gulp.task('backend-watch', function () {
    gulp.watch(backendAssets, ['backend-stop', 'backend-serve']);
});

gulp.task('backend-stop', function () {
    if (backendServerProcess) {
        backendServerProcess.kill('SIGHUP');
    }
});

gulp.task('default', ['frontend', 'backend']);

gulp.task('frontend', ['frontend-assets', 'frontend-serve', 'frontend-watch']);
gulp.task('backend', ['backend-serve', 'backend-watch']);