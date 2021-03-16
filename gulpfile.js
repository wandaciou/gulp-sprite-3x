var gulp = require('gulp');
var spritesmith = require('gulp.spritesmith');

gulp.task('sprite', function () {
  var spriteData = gulp.src('dist/img/*.png').pipe(spritesmith({
      retinaSrcFilter: 'dist/img/*@2x.png',
      retinaImgName: 'sprite@2x.png',
      retina3xSrcFilter: '/dist/img/*@3x.png',
      retina3xImgName: 'sprite@3x.png',
      imgName: 'sprite.png',
      cssName: 'sprite.css'
  }));
  return spriteData.pipe(gulp.dest('dist/'));
});