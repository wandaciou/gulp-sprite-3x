var gulp = require('gulp');
var sprite = require('gulp.spritesmith.3x');

gulp.task('sprite', function() {
  var spriteData = gulp.src('dist/img/icon/*.png')
    .pipe(sprite({
      imgName: 'sprite.png',
      retinaImgName: 'sprite@2x.png',
      retina3xImgName: 'sprite@3x.png',
      algorithms: 'left-right',
      cssName: 'sprite.css',
      retinaSrcFilter: 'dist/img/icon/*@2x.png',
      retina3xSrcFilter: 'dist/img/icon/*@3x.png',
      imgPath: '../img/sprite/sprite.png',
      retinaImgPath: '../img/sprite/sprite@2x.png',
      retina3xImgPath: '../img/sprite/sprite@3x.png'
    }));

  spriteData.img.pipe(gulp.dest('./dist/img/sprite/'));
  spriteData.css.pipe(gulp.dest('./dist/sass/'));
});