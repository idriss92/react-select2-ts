var gulp = require('gulp'),
    ts = require('gulp-typescript'),
    del = require('del'),
    merge = require('merge2'),
    plugins = require('gulp-load-plugins');
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

gulp.task('sass',['clean'], () => {
    return gulp.src('src/**/*.scss')
        .pipe(plugins().sourcemaps.init())
        .pipe(plugins().sass({
            'outputStyle': 'compressed'
        }).on('error', plugins().sass.logError))
        .pipe(plugins().sourcemaps.write())
        .pipe(gulp.dest('dist'));
});

gulp.task('clean', function(){
    return del.sync('dist');
})

gulp.task('jsmin', () =>{
    var envs = plugins().env.set({
        'NODE_ENV': 'production'
    })
})