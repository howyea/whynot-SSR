const gulp = require('gulp')
const webpack = require('webpack-stream')
var named = require('vinyl-named')
gulp.task('default', function() {
    return gulp.src('src/server.tsx')
    .pipe(named())
    .pipe(webpack( require('./webpack.config.js') ))
    .pipe(gulp.dest('dist/'));
  });
gulp.task('watch', function () {
    gulp.watch('./src/**/*', ['greet']); // 注意，任务列表是个数组，即使只有一个元素。
});