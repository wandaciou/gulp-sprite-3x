var gulp = require('gulp');
var sprite = require('gulp.spritesmith.3x');

gulp.task('sprite',async function() {
  var spriteData = gulp.src('/dist/img/sprite/*.png')
    .pipe(sprite({
      retinaSrcFilter: '/dist/img/sprite/*@2x.png',
      retinaImgName: 'sprite@2x.png',
      retina3xSrcFilter: '/dist/img/sprite/*@3x.png',
      retina3xImgName: 'sprite@3x.png',
      imgName: 'sprite.png',
      imgPath: '/dist/img/sprite.png',
      retinaImgPath: '/dist/img/sprite@2x.png',
      retina3xImgPath: '/dist/img/sprite@3x.png',
      cssName: 'sprites.css'
    }));

  spriteData.img.pipe(gulp.dest('/dist/img/'));
  spriteData.css.pipe(gulp.dest('/sass/'));
});