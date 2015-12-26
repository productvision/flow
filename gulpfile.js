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
        './module/core/*/module.js',
        './module/core/**/*.{js,css}',

        './module/grolba/*/module.js',
        './module/grolba/**/*.{js,css}'
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