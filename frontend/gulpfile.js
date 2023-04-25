const { src, dest, watch, series } = require('gulp')
const sass = require('gulp-sass')(require('sass'));

function buildStyles() {
    return src('src/components/SCSS/**/*.scss')
        .pipe(sass())
        .pipe(dest('src/'))
}

function watchTask() {
    watch(['src/components/SCSS/**/*.scss'], buildStyles)
}

exports.default = series(buildStyles, watchTask)