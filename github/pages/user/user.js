Page({
    data: {
      username: ''
    },
    userNameInput (e) {
    //   console.log(e.detail.value);
      this.setData({
        username: e.detail.value
      })
    },
    toInfo () {
      // console.log(this.data.username)
      let isNav = false
      if (this.data.username) {
        wx.showToast({
          title: '数据加载中...',
          icon: 'loading',
          duration: 1000
        });
      } else {
        wx.showModal({
          title: '请输入用户名...',
          showCancel: false,
          success: function(res) {
          }
        })
      }
    wx.setStorage({
        key:'username',
        data:this.data.username
    })
      setTimeout(() => wx.switchTab({
        url: '../index/index'
      }), 1000)
    }
  })
  