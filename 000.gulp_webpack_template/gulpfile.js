const gulp = require("gulp");
const plugins = require('gulp-load-plugins')()
const webpackStream = require("webpack-stream");
const webpack = require("webpack");
const webpackConfig = require("./webpack.config");

// フォルダパス設定
const PATH = {
  develop: './src', // 開発用ディレクトリ
  deploy: './dist', // 公開用ディレクトリ
};

// 対象外ファイル
const filterFiles = [
  '!' + PATH.develop + '**/*コピー*.*',
  '!' + PATH.develop + '**/_*.*',
  '!' + PATH.develop + '_include_libs/**/*.js' //（_include_libs以下のjsファイルは除外）
];

// リリースモード判定フラグ
const isRelease = (function() {
  const _arg = process.argv.slice(1)[1];
  return _arg && _arg.indexOf('-rel') !== -1;
}());


/**************************************************
 * css
 *************************************************/
gulp.task('scss', () => {
  const arr_src = [PATH.develop + 'scss/**/*.scss'];
  gulp.src(arr_src.concat(filterFiles))
    .pipe(plugins.plumber({
      errorHandler: function(err) {
        console.log(err.messageFormatted);
        this.emit('end');
      }
    }))
    .pipe(plugins.sass({outputStyle: isRelease ? 'compressed' : 'expanded'}))
    .pipe(plugins.autoprefixer({
      browsers: ['last 2 version'],
      cascade: false
    }))
    .pipe(gulp.dest(PATH.deploy + '/css/'));
});


/**************************************************
 * js
 *************************************************/
gulp.task('js', () => {
  return webpackStream(webpackConfig, webpack)
    .pipe(gulp.dest('dist/js'));
});


/**************************************************
 * build
 *************************************************/
gulp.task('build', gulp.parallel('scss', 'js'));


/**************************************************
 * watch
 *************************************************/
gulp.task('watch', (cb) => {
  gulp.watch(PATH.develop + 'scss/**/*.scss', gulp.task('scss'));
  gulp.watch(PATH.develop + 'js/**/*.js', gulp.task('js'));
  cb();
});


/**************************************************
 * default
 *************************************************/
gulp.task('default', gulp.parallel('build', 'watch'));