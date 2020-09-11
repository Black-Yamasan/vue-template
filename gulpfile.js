const gulp = require('gulp');
const webpackStream = require('webpack-stream');
const webpack = require('webpack');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const cleanCss = require('gulp-clean-css');
const watch = require('gulp-watch');
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const rename = require('gulp-rename');
const gulpif = require('gulp-if');
const browserSync = require('browser-sync').create();
const runSequence = require('gulp4-run-sequence');
const webpackConfig = require('./webpack.config');
const minimist = require('minimist');

const destDir = './dist/';
const prodDir = './htdocs/';
const config = {
	string: 'env',
	default: { env: process.env.NODE_ENV || 'dev'}
}
const options = minimist(process.argv.slice(2), config);
const isProd = ( options.env === 'prod' );

gulp.task('browser-sync', () => {
  browserSync.init({
    server: {
      baseDir: destDir
    }
  });
});

gulp.task('sass', () => {
  return gulp.src(['src/styles/**/*.scss'])
  .pipe(plumber({
    errorHandler: notify.onError('Error: <%= error.message %>')
  }))
  .pipe(sass( {
    outputStyle: 'expanded'
  }))
  .pipe(rename(function (path) {
    path.dirname = 'css'
  }))
  .pipe(autoprefixer({
    overrideBrowserslist: ['last 2 version'],
    cascade: false
  }))
  .pipe(gulpif(isProd, cleanCss()))
  .pipe(gulpif(!isProd, gulp.dest(destDir + 'assets/')))
  .pipe(gulpif(isProd, gulp.dest(prodDir + 'assets/')))
});


gulp.task('html', () => {
  return gulp.src(['src/template/pages/**/*.html'])
  .pipe(gulpif(!isProd, gulp.dest(destDir + '/')))
  .pipe(gulpif(isProd, gulp.dest(prodDir + '/')))
});


gulp.task('images', () => {
  return gulp.src(['src/images/**/*'])
  .pipe(gulpif(!isProd, gulp.dest(destDir + 'assets/images/')))
  .pipe(gulpif(isProd, gulp.dest(prodDir + 'assets/images/')))
});


gulp.task('webpack', () => {
  return webpackStream(webpackConfig, webpack)
  .on('error', function handleError() {
    this.emit('end');
  })
  .pipe(gulpif(!isProd, gulp.dest(destDir)))
  .pipe(gulpif(isProd, gulp.dest(prodDir)))
});


gulp.task('data', () => {
  return gulp.src(['src/data/**/*'])
  .pipe(gulpif(!isProd, gulp.dest(destDir + 'assets/data/')))
  .pipe(gulpif(isProd, gulp.dest(prodDir + 'assets/data/')))
});


gulp.task('bs-reload', () => {
  browserSync.reload();
});


gulp.task('build', gulp.series(
  gulp.parallel('sass', 'webpack', 'html', 'images', 'data')
));


gulp.task('default', gulp.series(
  gulp.parallel('browser-sync', 'sass', 'webpack', 'html', 'images', () => {
    watch(['src/styles/**/*.scss'], () => {
      return runSequence(
        'sass',
        'bs-reload'
      );
    });
    watch(['src/vue/**/*.vue', 'src/scripts/**/*.js'], () => {
      return runSequence(
        'webpack',
        'bs-reload'
      );
    });
    watch(['src/images/**/*'], () => {
      return runSequence(
        'images',
        'bs-reload'
      );
    });
    watch(['src/template/pages/**/*'], () => {
      return runSequence(
        'html',
        'bs-reload'
      );
    });
  })
));
