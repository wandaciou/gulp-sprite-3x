var gulp = require('gulp');
var sprite = require('gulp.spritesmith.3x');

gulp.task('sprite', function() {
  var spriteData = gulp.src('dist/img/*.png')
    .pipe(sprite({
      retinaSrcFilter: 'dist/img/*@2x.png',
      retinaImgName: 'sprite@2x.png',
      retina3xSrcFilter: 'dist/img/*@3x.png',
      retina3xImgName: 'sprite@3x.png',
      imgName: 'sprite.png',
      imgPath: '../img/sprite.png',
      retinaImgPath: '../img/sprite@2x.png',
      retina3xImgPath: '../img/sprite@3x.png',
      cssName: 'sprites.css'
    }));

  spriteData.img.pipe(gulp.dest('./dist/img/'));
  spriteData.css.pipe(gulp.dest('./sass/'));
});