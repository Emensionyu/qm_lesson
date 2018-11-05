const STATUS_STOP = 'stop'
const STATUS_RUNNING = 'running'
// 所有天气都该处理的， 天气的基类
class Particle {
  constructor(ctx, width, height, opts) {
    // 定时器 不需要外界引用， 只供内部实现
    // clearInterval() 变量前加_表示私有的意思
    this._timer = null; 
    this._options = opts || {}
    this.ctx = ctx //绘图的句柄
    this.status =  STATUS_STOP
    this.w = width
    this.h = height
    this._init();
  }
  _init() {
    //每个子类去做自己的准备吧
  }
  _draw() {}
  run () {
    // 公有？ 所有天气都有run 
    if (this.status !== STATUS_RUNNING) {
      this.status = STATUS_RUNNING
      this._timer = setInterval(() => {
        this._draw();
      }, 30)
    }
  }
}
class Rain extends Particle{
  _init() {
    // 在子类的内部， 覆盖父类的方法
    let {ctx, w, h} = this
    ctx.setLineWidth(2)
    ctx.setLineCap('round')
    console.log(ctx, w, h);
    // let i
    let amount = this._options.amount || 100
    let speedFactor= this._options.speedFactor || 0.03
    let speed = speedFactor * h
    let ps = (this.particles = [])
    for (let i = 0; i < amount; i++) {
      // 起点和终点
      let p = {
        x: Math.random() * w,
        y: Math.random() * h,
        l: 2 * Math.random(),
        xs: -1,
        ys: 10 * Math.random() + speed,
        color: 'rgba(255, 255, 255, .4)'
      }
      ps.push(p)
    }
  }
  _draw() {
    let ps = this.particles
    // console.log(ps);
    let ctx = this.ctx
    for (let i = 0; i < ps.length; i++) {
      let s = ps[i];
      ctx.beginPath();
      ctx.moveTo(s.x, s.y)
      ctx.lineTo(s.x + s.l * s.xs, s.y+ s.l * s.ys);
      ctx.setStrokeStyle(s.color)
      ctx.stroke()
    }
    ctx.draw()
    this._updata()
  }
  _updata(){
      let{w,h}=this
      let ctx=this.ctx;
      ctx.clearRect(0,0,this.w,this.h)
      let ps=this.particles
      for(let i=0;i<ps.length;i++){
          let s=ps[i]
          s.x+=s.xs;
          s.y+=s.ys;
          if(s.x>w||s.y>h){
              s.x=Math.random()*w
              s.y=-10
          }
      }
  }
}
class Thunder {
}

export default (ctx, width, height, opts, ParticleName = 'rain') => {
  switch (ParticleName) {
    case 'rain':
      return new Rain(ctx, width, height, opts)
      break;
    case 'thunder':
      return  new Thunder(ctx, width, height, opts)
      break;
  }
}
