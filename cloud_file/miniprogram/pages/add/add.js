// miniprogram/pages/add/add.js

const db=wx.cloud.database()
const photos=db.collection('photos')
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  upload:function(){
    // 手机  摄像头 相册，
    // IOS ANdroid 小程序，
    wx.chooseImage({
      count: 4, // 最多可以选择的图片张数，默认9
      sizeType: ['original', 'compressed'], // original 原图，compressed 压缩图，默认二者都有
      sourceType: ['album', 'camera'], // album 从相册选图，camera 使用相机，默认二者都有
      success: function(res){
        console.log(res);
        // success文件数组
        const temFilePaths=res.tempFilePaths;
        // 文件上传流程
        for(let i=0;i<temFilePaths.length;i++){
          // 1.给上传到云上的文件取一个不会重复的文件名，使用时间的毫秒数+一个随机数 时间挫
          let randString=Math.floor(Math.random()*1000000)+'.png';
          wx.cloud.uploadFile({
            cloudPath:randString,
            filePath:temFilePaths[i],
            success:res=>{
              console.log(res);//返回远程访问地址
              photos.add({
                data:{
                  image:res.fileID
                }
              }).then(res=>{
                wx.showToast({
                  title:'上传成功',
                  icon:'success'
                })
              })
            },
            fail:console.err


          })

        }
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})