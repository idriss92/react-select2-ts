var gulp = require('gulp'),
    ts = require('gulp-typescript'),
    del = require('del'),
    merge = require('merge2'),
    sass = require('gulp-sass');
    
var config = {
    json: 'src/**/*.json',
    typescript: 'src/**/*.tsx',
    sass: 'src/**/*.scss',
    // fontBefore : 'src/styles/font-awesome-4.7.0/fonts/**.*',
    // fontAfter: 'dist/styles/font-awesome-4.7.0/fonts'
};

gulp.task('default', ['json', 'sass', 'typescript'], function(){
    return gulp.src(config.json).pipe(gulp.dest('dist'));
});

gulp.task('json', ['clean'], function(){
    return gulp.src(config.json).pipe(gulp.dest('dist'));
})

gulp.task('typescript', ['clean'], function(){
    var tsproject = ts.createProject('./tsconfig.json');
    var result = gulp.src(config.typescript).pipe(tsproject());
    return merge([
        result.dts.pipe(gulp.dest('dist')),
        result.js.pipe(gulp.dest('dist'))
    ])
});

gulp.task('sass', ['clean'], function(){
    return gulp.src(config.sass)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist'))
});

// gulp.task('icon',['clean'],function(){
//     return gulp.src(config.fontBefore)
//     .pipe(gulp.dest(config.fontAfter))
// })

gulp.task('clean', function(){
    return del.sync('dist');
})
