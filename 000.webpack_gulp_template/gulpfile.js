/**************************************************
 * modules
 *************************************************/
var gulp = require('gulp');
var sass = require('gulp-sass');
var plumber = require('gulp-plumber');
var autoprefixer = require('gulp-autoprefixer');


/**************************************************
 * path
 *************************************************/
var paths = {
  'scss': 'src/scss/**/*.scss', // scssファイルのパス
  'exScss': '!src/scss/**/_*.scss', // コンパイル除外するscssファイルのパス（_が付いたcssファイルは除外）
  'css': 'dist/assets/css', // cssコンパイル先のパス
};


/**************************************************
 * tasks
 *************************************************/
// sass
gulp.task('sass-compile', function() {
  gulp.src([paths.scss, paths.exScss])
    .pipe(plumber({
      errorHandler: function(err) {
        console.log(err.messageFormatted);
        this.emit('end');
      }
    }))
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(autoprefixer({
        browsers: ['last 2 version'],
        cascade: false
    }))
    .pipe(gulp.dest(paths.css));
});

// build
gulp.task('build', ['sass-compile']);

// watch
gulp.task('watch', function(){
  gulp.watch(paths.scss, ['sass-compile']);
});


// default
gulp.task('default', ['build', 'watch']);
