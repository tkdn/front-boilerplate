const gulp        = require('gulp')
const runSequence = require('run-sequence')

gulp.task('default', function(callback) {
  runSequence('clean', 'sass', 'watch', callback)
})
