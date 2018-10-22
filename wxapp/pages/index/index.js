const app = getApp();

Page({
  // 数据
  data: {
    slides:  [],
    entities: [],
    stories:[],
 
  },
  onLoad(){
    console.log('首页加载了');
    console.log(app.globalData.motto);
    this.setData({
      // console.log(app.globalData.motto);
      slides:app.globalData.slides,
      entities:app.globalData.entities,
      stories:app.globalData.stories,
    })
    // console.log(this.data.slides);
  },
  testDrive () {
    console.log('test drive');
  },
  readMore(event) {
    // 小程序js api
    wx.navigateTo({
      url: `/pages/vehicles/show?id=${event.target.dataset.id}`
    })
  }
})