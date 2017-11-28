var gulp = require('gulp'),
    ts = require('gulp-typescript'),
    del = require('del'),
    merge = require('merge2'),
    sass = require('gulp-sass');
    // scss = require('gulp-scss'),
    // image = require('gulp-image');

gulp.task('default', ['json', 'sass', 'typescript'], function(){
    return gulp.src('src/**/*.json').pipe(gulp.dest('dist'));
});

gulp.task('json', ['clean'], function(){
    return gulp.src('src/**/*.json').pipe(gulp.dest('dist'));
})

gulp.task('typescript', ['clean'], function(){
    var tsproject = ts.createProject('./tsconfig.json');
    var result = gulp.src('src/**/*.tsx').pipe(tsproject());
    return merge([
        result.dts.pipe(gulp.dest('dist')),
        result.js.pipe(gulp.dest('dist'))
    ])
});

gulp.task('sass', ['clean'], function(){
    return gulp.src('src/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist'))
});

// gulp.task('scss', ['clean'], function(){
//     return gulp.src('src/**/*.scss')
//         .pipe(scss({"bundleExec": true}))
//         .pipe(gulp.dest('dist'))
// })

// gulp.task('image', ['clean'], function(){
//     gulp.src('src/images/**/*.*')
//         .pipe(gulp.dest('dist/images'));
// })

gulp.task('clean', function(){
    return del.sync('dist');
})
