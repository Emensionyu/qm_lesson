App({
  onLaunch:function(){
    console.log('应用启动l');
    wx.request({
      url: 'https://resources.ninghao.net/wxapp-case/db.json',
      data: {},
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success:(response)=>{
        // success

        // console.log(response);
        // const {slides,vehicles,stories}=response.data;
        // console.log(slides,vehicles,stories);
        // this.globalData.slides=slides;
        // this.globalData.vehicles=vehicles;
        // this.globalData.stories=stories;

        // Object.assign(this.globalData,response.data,{
        //   'friend':'糖糖'
        // });
        Object.assign(this.globalData,response.data);

        console.log(this.globalData);
        // console.log(a);
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      },
      error:function(err){
        console.log(err);
      }
    })
  },
  // 全局的数据App.js 是全局的
  // 用户的 登入状态
  //globalData不会自动加载，App.js把数据放在一个接口
  globalData:{
    motto:'廖颖棒棒的' 
   //把请求的数据放到globalData中
  //  sliders:function(response){
  //    return response.data.sliders;
  //  }写错了
  


  }

})