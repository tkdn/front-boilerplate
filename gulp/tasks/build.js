const gulp        = require('gulp')
const runSequence = require('run-sequence')

gulp.task('build', (callback)=> {
  runSequence('sass', 'webpack', callback);
})
