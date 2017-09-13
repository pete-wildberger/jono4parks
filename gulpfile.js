const gulp = require('gulp');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const pump = require('pump');
const concat = require('gulp-concat');

let jsFiles = [
  'public/scripts/app.js',
  'public/scripts/ngconfig.js',
  'public/scripts/controllers/IndexController.js',
  'public/scripts/controllers/DashBoardController.js',
  'public/scripts/controllers/EndorseController.js',
  'public/scripts/controllers/EventsController.js',
  'public/scripts/controllers/SupportController.js',
  'public/scripts/controllers/AuthController.js',
  'public/scripts/services/http.Service.js',
  'public/scripts/services/authFactory.js'
];

//tasks
gulp.task('default', () => {
  console.log('scripts ran');
  gulp
    .src(jsFiles)
    .pipe(
      babel({
        presets: ['es2015']
      })
    )
    .pipe(uglify())
    .pipe(concat('all.js'))
    .pipe(gulp.dest('public/app'));
});

//
// gulp.task('watch:default', () => {
//   gulp.watch(jsFiles, ['default']);
// });
//
// //default task
// gulp.task('default', ['watch:default']);
