//index.js
//获取应用实例
import config from '../../utils/config'

const app = getApp()

Page({
  data: {
    hiddenLoading: false,
    page: 1,
    pageSize: 4,
    days: 3,
    totalSize: 0,
    hasMore: true,
    articleList: [],
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  showDetail: function(e) {
    let dataset = e.currentTarget.dataset;
    let item = dataset && dataset.item;
    let contentId = item.contentId || 0;
    wx.navigateTo({
      url: `../detail/detail?contentId=${contentId}`
    });
  },
  onLoad: function () {
    let title = config.defaultBarTitle;
    wx.setNavigationBarTitle({
      title,
      success: function(res) {
        // success
      }
    })
    this.requestArticle()

  },
  requestArticle:function() {
    wx.request({
      url: 'https://www.easy-mock.com/mock/5bca9240e6742c1bf8220bbd/kicamp/list#!method=get',
      success: (res) => {
        console.log(res.data.data);
        let list = this.data.articleList;
        list = [...list, ...res.data.data];
        console.log(list);
        // const list = this.data.articleList;
        list.push(res.data.data[this.data.page-1])
        console.log(list)
        this.setData({
          hiddenLoading: true,
          articleList: list
        })
      }
    })
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  onReachBottom() {
    if (this.data.hasMore) {
      let nextPage = this.data.page + 1;
      this.setData({
        page: nextPage
      });
      this.requestArticle();
    }
    console.log('到页面底部了');
  }
})
