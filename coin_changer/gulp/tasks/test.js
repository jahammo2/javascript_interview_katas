// test and test:watch run the tests, with the later
// running continuously any time a test or js file changes
var gulp = require('gulp'),
    glob = require('glob'),
    watch = require('../util/watch'),
    gulpStart = require('../util/gulpstart'),
    config = require('../config');

gulp.task('test', function() {
  watch({
    root: 'src/js',
    match: [{
      when: '*.js',
      then: gulpStart('test')
    }]
  });

  watch({
    root: 'test',
    match: [{
      when: '*',
      then: gulpStart('test')
    }]
  });
});
