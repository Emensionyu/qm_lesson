const Controller = require('egg').Controller;

class NewsController extends Controller {
  async list() {
      const dataList={
        list:[
            {id:1,title:'this is news1',url:'/news/1'},
            {id:2,title:'this is news2',url:'/news/2'}
        ]
      };
    //模板编译与渲染
      await this.ctx.render('news/list.tpl',dataList);//渲染模板
  }
  async item(){
    const id=this.app.ctx.params.id||1;
    await this.ctx.render('news/item.tpl',id)
  }
}

module.exports = NewsController;
