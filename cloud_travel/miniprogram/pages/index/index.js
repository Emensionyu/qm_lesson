wx.cloud.init({

})
const db=wx.cloud.database();
Page({
  data:{
    ads:[],
    item:{
      user:{
        avatar:'',
        nickname:'mensonyu',
        summary:'啊哈哈啊'

      }
      

    }
  },
  onLoad:function(){
    db.collection("ads").get({
      success:res=>{
        this.setData({
          ads:res.data
        })
        // 神魔时候用云函数？小程序的前端搞不定的时候，
        // openid 需要复杂计算 async await 三个数据库的综合查询
        //mongodb用find()查询，where 条件, orderby 排序 ,limit限制条数，
        // skip忽略 skip.(10).limit(10)查第二页
        wx.cloud.callFunction({
          name:'getTravelInfo',
          data:{
            count:5,
            startIndex:0,

          },
          success:res=>{
            console.log(res);
          }

        })
        // console.log(res)/
      }

    })
  }

})