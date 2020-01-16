// 載入 gulp 與 外掛
const { src, dest, series } = require('gulp');
const babel = require('gulp-babel');
const gulpSass = require('gulp-sass');
const cleanCSS = require('gulp-clean-css');
const jsmin = require('gulp-jsmin');
const rename = require('gulp-rename');

// 定義任務區

// scss 轉譯成 css
function tocss() {
  return src('styles/scss/*.scss')
    .pipe(gulpSass())
    .pipe(dest('./build/css'));
}

// 壓縮 css
function cssmin() {
  return src('./build/css/*.css')
    .pipe(cleanCSS({ compatibility: 'ie8' }))
    .pipe(rename({ suffix: '.min' }))
    .pipe(dest('./build/css'));
}

// JS ES6 轉譯成 ES5
function babeljs() {
  return src('js/*.js')
    .pipe(babel({
      presets: ['@babel/env'],
    }))
    .pipe(dest('./build'));
}

// 壓縮 js
function minijs() {
  return src('./build/*js')
    .pipe(jsmin())
    .pipe(rename({ suffix: '.min' }))
    .pipe(dest('./build'));
}

// 任務導出，有導出才能使用
exports.tocss = tocss;
exports.cssmin = cssmin;
exports.babel = babeljs;
exports.jsmin = minijs;
exports.default = series(tocss, cssmin, babeljs, minijs); // 預設任務，一連串任務用 series() 包起來
