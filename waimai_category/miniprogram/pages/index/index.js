var order = ['guowei', 'shucai', 'blue', 'green', 'red']

Page({
  data: {
    category: [
      {
        name: '果味',
        id: 'guowei'
      },
      {
        name: '蔬菜',
        id: 'shucai'
      },
      {
        name: '炒货',
        id: 'chaohuo'
      },
      {
        name: '点心',
        id: 'dianxin'
      },
      {
        name: '粗茶',
        id: 'cucha'
      },
      {
        name: '淡饭',
        id: 'danfan'
      }
    ],
    curIndex: 0,
    detail: [],
    isScroll: false,
    toView:'guowei'//scrollview toView 的功能 自动跳转到某个子页面
  },
  onReady () {
    wx.request({
      url: 'http://www.gdfengshuo.com/api/wx/cate-detail.txt',
      success: (res) => {
        console.log(res);
        this.setData({
          detail: res.data,
          isScroll:true
        })
      }
    })
  },
  switchTab(e){
    this.setData({
      curIndex:e.target.dataset.index,
      toView:e.target.dataset.id
    })
  },
  switchList(event){
    console.log(event.detail.scrollTop/100)
    this.setData({
      curIndex:event.detail.scrollTop/100
    })
  }

  
 
})
