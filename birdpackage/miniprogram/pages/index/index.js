Page({
    data:{
        imageList:[]
    },
  scanCode: function () {
    wx.scanCode({
      onlyFromCamera: true,
      scanType: ['barCode'],
      success: res => {
        console.log('hhhh');
        wx.showToast({
          title: '数据加载中...',
          icon: 'loading',
          duration: 1000
        });
      }
    })
  },
  searchAnother:function(){
    wx.navigateTo({
      url: '../search/search',
    })
  }

})