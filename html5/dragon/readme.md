- 手机的尺寸
px 在手机端有问题，
css里 像素px retina 对应与iPhone是750px
硬件的物理尺寸iPhone有两个尺寸 iPhone8尺寸是宽度375pt 8 plut 宽度是414pt
- css相对单位 rem相对于html上设置的font-size
em单位，相对于自身的font-size
vh vw也是相对单位不管任何设备，宽度都是100vw，高度都是100vh 
将设备宽度的1/10作为html的font-size；10rem就会等于整屏宽度，方便生成栅格系统
- display： inline-block
将block元素变得inline，跟兄弟良好相处，但是子元素间会产生间隙 ，
1. 删除换行符
2. 父元素上添加font-size为0；