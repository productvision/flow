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
        './js/app.js',
        './js/config**.js',
        './js/main.js',
        './js/services/**/*.js',
        './js/directives/**/*.js',
        './js/controllers/**/*.js',
        './js/filters/**/*.js',
        './js/app/**/*.js',

        './css/**/*.css'
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