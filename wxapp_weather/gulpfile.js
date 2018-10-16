 const gulp=require('gulp');
 const jsonminify=require('gulp-jsonminify');


 const combiner=require('stream-combiner2');
 const sass=require('gulp-sass');
 const rename=require('gulp-rename');
 
 //服务器端
 //gulp 思想简单 将我们的开发流程分成一个个任务，
//  创建 了一个json 专业任务
const src='./client';//开发目录
const dist='./dist';
 gulp.task('json',()=>{
     return gulp
      .src(`${src}/**/*.json`)
      //找到文件进行一番处理pipe 开发目录 编译后的目录
      .pipe(jsonminify())
      .pipe(gulp.dest(dist))



 });
 gulp.task('wxss',()=>{
     const combined=combiner.obj([
         gulp.src(`${src}/**/*.{wxss,scss}`),
         sass().on('error',sass.logError),
         rename((path)=>(path.extname='.wxss')),
         gulp.dest(dist)


     ]);
     combined.on('error', ()=>{});

 });
 gulp.task('wxml', () => {
    return gulp
    .src(`${src}/**/*.wxml`)
    .pipe(gulp.dest(dist))
  });
  
 gulp.task('default',['wxml','wxss','json']);
