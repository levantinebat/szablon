////  Required
//////
//////////

var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    browserSync = require('browser-sync'),
    compass = require('gulp-compass'),
    plumber = require('gulp-plumber'),
    autoprefixer = require('gulp-autoprefixer'),
    del = require('del'),
    rename = require('gulp-rename');



////  Scripts
//////
//////////

gulp.task('scripts', function(){
    gulp.src(['../../static/js/**/*.js', '!../../static/js/**/*.min.js', '!../../static/js/**/dropzone.js' ])
    .pipe(plumber())
    .pipe(rename({suffix: '.min'}))
    .pipe(uglify())
    .pipe(gulp.dest('../../static/js'))
})



////  HTMl
//////
//////////

gulp.task('build:copy', function(){
    return gulp.src('static/**/*')
    .pipe(gulp.dest('build/'))
});





////  clear out all files and folder from build folder

gulp.task('build:cleanfolder', function(cb){
    del([
        'build/**'
    ], cb);
});


////  create build directory for all files
//////
//////////
//
// gulp.task('html', function(){
//     gulp.src('static**/*.html')
//     .pipe(reload({stream:true}));
// });
//



///task to remove unwanted files and folders that we don't want to include


gulp.task('build:remove', ['build:copy'], function(cb) {
    del([
        'build/scss/',
        'build/js/!(*.min.js)',
        'build/img/!(*.min*)'
    ], cb);
});

gulp.task('build',['build:minify','build:copy', 'build:remove']);

// ////  Browser sync
// //////
// //////////
//
// gulp.task('browser-sync', function() {
//     browserSync({
//         server:{
//             baseDir:"./"
//         }
//     });
// });
//


gulp.task('build:serve', function() {
    browserSync({
        server:{
            baseDir:"./build/"
        }
    });
});





////  Compass / Sass Task
//////
//////////

gulp.task('compass', function(){
    gulp.src('./static/scss/style.scss')
    .pipe(plumber())
    .pipe(compass({
        config_file: './config.rb',
        css: './static/css',
        sass: './static/scss',
        require: ['susy']
    }))
    .pipe(autoprefixer('last 2 versions'))
    .pipe(gulp.dest('./static/css/'))

});


////  Watch
//////
//////////

gulp.task('watch', function(){
    gulp.watch('./static/scss/**/*.scss', ['compass']);
    gulp.watch('../../static/**/*.js', ['scripts']);
});



////  Default tasks
//////
//////////

gulp.task('default', ['scripts', 'compass', 'watch']);
