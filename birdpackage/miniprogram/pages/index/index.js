const util = require('../../utils/util.js')
Page({
    data:{
        imageList:[{pic:"https://636c-cloud-912718-1257892962.tcb.qcloud.la/images2/ad.jpg?sign=6c1c406cdf1201e0565109538c43f493&t=1542775780"},
        {pic:"https://636c-cloud-912718-1257892962.tcb.qcloud.la/images2/a22.jpg?sign=7052fea5df9db31e671f55d073d3a059&t=1542775807"},
        {pic:"https://636c-cloud-912718-1257892962.tcb.qcloud.la/images2/a3.jpg?sign=4089fa08789d318b21cdcd363425aeb3&t=1542775829"}],
      expressLists: [],
      hasMore: false, 
      articleList: [],
      motto: 'Hel市lo World',
      userInfo: {},
      hasUserInfo: false,   
      canIUse: wx.canIUse('button.open-type.getUserInfo'),
      page: 1,
      pageSize: 4,
      isLoading:false,
      bottomshow:false,

     
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
  tapImage:function(){
    wx.navigateTo({
      url: '../game/game'
    })

  },
  searchAnother:function(){
    wx.navigateTo({
      url: '../search/search',
    })
  },
  onLoad:function(){
    this.initSwiper();
    this.getList('down')
  },
 
  toDetail(e){
    console.log(e);
    let codeExpress=e.currentTarget.dataset.contentid;
    console.log(codeExpress);
    // let item=dataset.item;
    // let contentId=item.contentId||0;
    
    wx.navigateTo({
      url: `../Todetail/index?contentId=${codeExpress}`,
    })

  },
  getList(type) {
    this.setData({
    isLoading: true,
      hasMore: true
    })
    type === 'down' ? this.setData({ page: 0 }) : null;
    util.$get('https://www.easy-mock.com/mock/5bca919de6742c1bf8220b50/example/express#!method=get', ).then(res => {
      if (res.statusCode == 200) {
        this.processData(type, res.data.data.expressList)
      }
    }).catch(e => {
      this.setData({
        isLoading: true,
        hasMore: false
      })
      wx.stopPullDownRefresh()
      wx.showToast({ title: `网络错误!`, duration: 1000, icon: "none" })
    })
 
  },
 
  processData(type, list) {
    if (list.length) {
      if (type === 'up') { // 上拉处理
        this.setData({
          expressLists: this.data.expressLists.concat(list)
        })
      } else { // 下拉出来
        this.setData({
          expressLists: list
        })
        wx.stopPullDownRefresh()
      }
      this.setData({
        page: ++this.data.page,
        isLoading: true,
        hasMore: true
      })
    } else {
      if (type === 'down') {
        wx.showToast({ title: `没有数据`, duration: 1500, icon: "none" })
        this.setData({
          isLoading:false,
          hasMore: false
        })
      } else {
        this.setData({
          isLoading: false,
          hasMore: true
        })
      }
    }

  },
  initSwiper() {
    util.$get(`https://www.easy-mock.com/mock/5bca919de6742c1bf8220b50/example/express#!method=get`,{}).then(res => {
      console.log(res)
      console.log(res.statusCode)
      console.log(res.data.data)
      
      if (res.statusCode==200) {
        this.setData({
          expressLists:res.data.data.expressList
        })
      }
    }).catch(e => {
      wx.showToast({ title: `网络错误!`, duration: 1000, icon: "none" })
    })
  
  },
  onPullDownRefresh() {
    this.getList('down')
    this.initSwiper() // 加载轮播图


  },
  onReachBottom() {
    if (!this.data.isLoading) { // 防止数据还没回来再次触发加载
      return;
    }
    if(this.data.page<=3){
      this.getList('up')

    }else{
      wx.stopPullDownRefresh()
      this.setData({
        bottomshow:true

      })
    }
   
   
     
    
  },
  

})