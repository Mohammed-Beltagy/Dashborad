const gulp = require("gulp"),
      connect = require('gulp-connect'),
      pug = require("gulp-pug"),
      sass = require('gulp-sass')(require('sass')),
      autoprefixer = require('gulp-autoprefixer'),
      sourcemaps = require('gulp-sourcemaps'),
      uglify = require('gulp-uglify');

// Compile Pug Files
gulp.task('compile-pug', () => gulp.src('./stage/html/index.pug')
                                    .pipe(pug())
                                    .pipe(gulp.dest("./docs/"))
                                    .pipe(connect.reload())
)

// Compile Scss Files With Prefixes
gulp.task('compile-sass', () => gulp.src('./stage/sass/main.scss')
                                    .pipe(sourcemaps.init())
                                    .pipe(sass({outputStyle: "compressed"}))
                                    .pipe(autoprefixer("last 2 versions"))
                                    .pipe(sourcemaps.write())
                                    .pipe(gulp.dest("./docs/assets/"))
                                    .pipe(connect.reload())
)

// Redirect JS Files
gulp.task('redirect-js', () => gulp.src('./stage/js/app.js')
                                    .pipe(uglify())
                                    .pipe(gulp.dest('./docs/assets/'))
                                    .pipe(connect.reload())
)

// Start Server & Watch Changes
gulp.task('default', () => {
  connect.server({
    root: './docs/',
    livereload: true
  });
  gulp.watch('./stage/html/**/*.pug', gulp.series('compile-pug'))
  gulp.watch('./stage/sass/**/*.scss', gulp.series('compile-sass'))
  gulp.watch('./stage/js/**/*.js', gulp.series('redirect-js'))
})