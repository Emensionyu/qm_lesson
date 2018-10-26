const db = wx.cloud.database();
const userInfo = db.collection('userInfo')

Page({
  data: {
    userList: []
  },
  onLoad: function() {
    userInfo.get().then(res => {
      // console.log(res)
      this.setData({
        userList: res.data
      })
    })
  },
  getUserInfo: function(result) {
   
    // openId 用户独有， 拿不到， 云函数可以拿到, 好几个接口
    // 云函数权限就是超级管理员
    wx.cloud.callFunction({

      name: 'getOpenId',
      complete: res => {
        // 用户来了
      // 一个用户生成了多条信息
      // userinfo mysql_openId uniqueu
      // userInfo:不要重复在userInfo拿出openId到userInfo里查一下，
      // where（openid==用户.openId）
      // 有就不加。没有加
      var openid=res.result.openId
      console.log(res)
      console.log(res.result)
      userInfo.where({
        _openid:openid
      }).count().then(res=>{
        if(res.total==0){
          
        userInfo.add({
          data: result.detail.userInfo
        }).then(res => {
          console.log(res);
        })

        }else{
          wx.showToast({
            title:'不能重复加'
          })
        }
        // console.log(res);
      })

        // console.log(res);
      }
    })
  },
  onShareAppMessage: (res) => {
    return {
      title: '唐唐的私照App',
      path: '/pages/index/index',
      imageUrl: 'https://636f-codingdream-74b4e5-1256758450.tcb.qcloud.la/687434.png',
      success: res => {
        console.log('转发成功')
      },
      fail: res => {
        console.log('转发失败')
      }
    }
  }
})
