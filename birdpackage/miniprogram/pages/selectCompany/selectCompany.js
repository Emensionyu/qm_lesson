// miniprogram/pages/selectCompany/selectCompany.js

const db = wx.cloud.database()
const com = db.collection('companyes')
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {       
    scrollList: ['A', 'B','C','D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
    
    mainImage: ['https://636c-cloud-912718-1257892962.tcb.qcloud.la/images2/002.jpg?sign=4cf1c6670825607886d223b526d40684&t=1542775630'],
      offsetList: [],
    catalogIndex:null,
    toView:'A',
    scrollTop: 4000,
    com_code: [
      {
        "codename": "YTO",
        "name": "圆通速递"
      },
      {
        "codename": "ZTO",
        "name": "中通快递"
      },
      {
        "codename": "YD",
        "name": "韵达快递"
      },
      {
        "codename": "YZPY",
        "name": "邮政快递包裹"
      },
      {
        "codename": "EMS",
        "name": "EMS"
      },
      {
        "codename": "JD",
        "name": "京东"
      },
      {
        "codename": "ZJS",
        "name": "宅急送"
      }
    ]
  },
  switchTab(e){
    console.log(e);
    if (e.currentTarget.dataset.id=="I"){
      this.setData({
        curIndex: e.currentTarget.dataset.index,
        toView: "F",
      })

    }
    this.setData({
      curIndex:e.currentTarget.dataset.index,
      toView: e.currentTarget.dataset.id,
    })
  },
  backwithData(e) {
    const  company=e.currentTarget.dataset.text;
    let comListcode=this.data.com_code;
    let codename="";
   for(let i=0;i<comListcode.length;i++){
     if(comListcode[i].name==company){
      //  this.setData({})
      console.log(comListcode[i].codename)
       codename = comListcode[i].codename;
       console.log(codename);
      wx.setStorage({
        key:"codename",
        data:codename
      })
      break;
     }
   }
    const src = e.currentTarget.dataset.src;
    console.log(company)
    console.log(src);
    wx.setStorage({
      key: 'company',
      data: company,
    })
    wx.setStorage({
      key: 'src',
      data:src,
    })
    var pages = getCurrentPages();
    var Page = pages[pages.length - 1];//当前页
    var prevPage = pages[pages.length - 2];  //上一个页面
    var info = prevPage.data //取上页data里的数据也可以修改
    prevPage.setData({ src,company })//设置数据
    wx.navigateBack({
      
    })

  },
  onLoad: function (options) {
    // if(companyList){
    //   console.log(companyList);

    // }
   
    var that = this
    let offsetList = that.data.offsetList;
    const query = wx.createSelectorQuery().in(this)
    query.selectAll('.item-A').boundingClientRect(function (rects) {
      rects.forEach(function (rect) {
        rect.top     // 节点的上边界坐标
        offsetList.push(rect.top)
        that.setData({
          offsetList,
        })
      })
    }).exec()
  com.get().then(res=>{
    console.log(res);
    // console.log()
    this.setData({
      comList:res.data[0].companyList
    })
  })
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

  },
  lower(){
    // this.data.page++;
    // loadNotes(this.addNotes,this.data.page);
  },
  upper(){

  }
})