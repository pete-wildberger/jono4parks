const gulp = require('gulp');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const pump = require('pump');
// var browserify = require('gulp-browserify');
const concat = require('gulp-concat');

// gulp.task('scripts', function() {
//     gulp.src(['app/src/**/*.js'])
//         .pipe(browserify())
//         .pipe(concat('dest.js'))
//         .pipe(gulp.dest('dist/build'))
// })
let jsFiles = ['public/scripts/app.js',
       'public/scripts/ngconfig.js',
       'public/scripts/controllers/IndexController.js',
       'public/scripts/controllers/DashBoardController.js',
       'public/scripts/controllers/WelcomeController.js',
       'public/scripts/controllers/EndorseController.js',
       'public/scripts/controllers/EventsController.js',
       'public/scripts/controllers/SupportController.js',
       'public/scripts/services/http.Service.js',
       'public/scripts/services/authFactory.js'
     ];


// gulp.task('default', () =>
//     gulp.src(jsFiles)
//         .pipe(babel({
//             presets: ['env']
//         }))
//         .pipe(gulp.dest('dist'))
// );

//tasks
gulp.task('default', () => {
  console.log('scripts ran');
  gulp.src(jsFiles)
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(uglify())
    .pipe(concat('all.js'))
    .pipe(gulp.dest('public/app'));
});
//
// gulp.task('concat', function() {
//   return gulp.src(['dist/app.js',
//          'dist/ngconfig.js',
//          'dist/IndexController.js',
//          'dist/DashBoardController.js',
//          'dist/WelcomeController.js',
//          'dist/EndorseController.js',
//          'dist/EventsController.js',
//          'dist/SupportController.js',
//          'dist/http.Service.js',
//          'dist/authFactory.js'
//        ])
//     .pipe(concat('bundle.js'))
//     .pipe(gulp.dest('build'));
// });



// gulp.task('watch:scripts', () => {
//   gulp.watch('public/scripts/*.js', ['scripts']);
// });

//default task
// gulp.task('default', ['watch:scripts']);
