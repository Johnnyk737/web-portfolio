let gulp = require('gulp');
let sass = require('gulp-sass');
let sync = require('browser-sync').create();
let runSequence = require('run-sequence');
let uglify = require('gulp-uglify');
let gulpIf = require('gulp-if');
let gutil = require('gulp-util');
//let babel = require('gulp-babel');

function reload(done) {
  sync.reload();
  done();
}

gulp.task('browserSync', () => {
  sync.init({
    server: {
      baseDir: './'
    }
  })

});

//create production ready css file
gulp.task('sass', () => {
  return gulp.src('./scss/**/*.scss')
  .pipe(sass())
  .pipe(gulp.dest('css/'))
  .pipe(sync.reload({
    stream: true
  }))
});

gulp.task('minify', () => {
  return gulp.src('./js/**/*.js')
    // .pipe(babel({
    //   presets: ['es2015']
    // }))
    .pipe(gulpIf('*.js', uglify()))
    .on('error', function (err) { gutil.log(gutil.colors.red('[Error]'), err.toString()); })
    .pipe(gulp.dest('dist'))
});

gulp.task('watch', () => {
  gulp.watch('./scss/**/*.scss', gulp.series('sass', reload));
  gulp.watch('./index.html', gulp.series(reload));
  gulp.watch('./js/**/*.js', gulp.series(reload)); //gulp.series('minify', reload));
});

//create watchers, called start because it's easier
//add tasks that need to be fired before the watch task
// gulp.task('start', gulp.series(['browserSync','sass'], () => {
//   console.log('Starting dev environment');
//   gulp.watch('./scss/**/*.scss', gulp.series('sass'), sync.reload);
//   gulp.watch('./index.html', sync.reload);
//   gulp.watch('./js/**/*.js', sync.reload);
//   done();
// }));

gulp.task('start', gulp.parallel('browserSync', 'sass', 'watch')
);

//create production ready js files
// gulp.task('uglify-js', () => {
//   return gulp.src('./dist/**/*.js')
//   .pipe(minify())
//   .pipe(gulp.dest('js/'))
//   .pipe(sync.reload({
//     stream: true
//   }))
// });



// gulp.task('build', (callback) => {
//   console.log('Building files for Production');
//   runSequence(['sass', 'minify'], callback);
// });

gulp.task('build', gulp.parallel('sass') //minify
);