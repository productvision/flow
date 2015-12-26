var gulp = require('gulp'),
    connect = require('gulp-connect'),
    bowerFiles = require('main-bower-files'),
    inject = require('gulp-inject');


gulp.src('./index.html')
    .pipe(inject(gulp.src(bowerFiles(), {
        read: false
    }), {
        name: 'bower'
    }))
    .pipe(inject(gulp.src([
        './module/core/config/module.js',
        './module/core/config/**/*.{js,css}',
        './module/core/loader/module.js',
        './module/core/loader/**/*.{js,css}',
        './module/core/menu/module.js',
        './module/core/menu/**/*.{js,css}',
        './module/core/app/module.js',
        './module/core/app/**/*.{js,css}',

        './module/**/module.js',
        './module/**/*.{js,css}'
    ]), {
        read: false
    }))
    .pipe(gulp.dest('.'));


gulp.task('connect', function () {
    connect.server({
        root: '.',
        livereload: true
    });
});

gulp.task('html', function () {
    gulp.src('./*.html')
        .pipe(connect.reload());
});

gulp.task('watch', function () {
    gulp.watch(['./*.html'], ['html']);
});

gulp.task('default', ['connect', 'watch']);