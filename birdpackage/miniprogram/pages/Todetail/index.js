              // miniprogram/pages/Todetail/index.js
// import { $wuxSelect } from '../../dist/index'              
const db = wx.cloud.database()
const expresses = db.collection('expresses')
const app = getApp()
const QQ_MAP_KEY = 'TKIBZ-QOAH3-6YC37-3BUFY-S6BJO-5CBGM'
/**
 *  逆地址查询
 * @param {*} lat
 * @param {*} lon
 */
export const geocoder = (lat, lon, success = () => { }, fail = () => { }) => {
  return wx.request({
    url: 'https://apis.map.qq.com/ws/geocoder/v1/',
    data: {
      location: `${lat},${lon}`,
      key: QQ_MAP_KEY,
      get_poi: 0
    },
    success,
    fail
  })
}
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tracesList:[],
    code: "801237427479933464",
    Traces:[],
    slider: 0,
    

  },
  

  sliderChange(e) {
    this.setData({
      slider: e.detail.value,
    })
  },
  bindchange(e) {
    console.log(e)
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  chooseLocation() {
    wx.chooseLocation({
      success: (res) => {
        let { latitude, longitude } = res
        let { lat, lon } = this.data
        if (latitude == lat && lon == longitude) {
          this.getWeatherData()
        } else {
          this.updateLocation(res)
        }
      }
    })
  },
  onLoad(options) {
    let company = wx.getStorageSync("company");
    this.setData({
      company
    })
    let codeExpress=options.contentId
    // console.log(codeExpress);
    this.getLocation()
    if(!codeExpress){
      let code = wx.getStorageSync("code")
      console.log(code);
      this.setData({
        code,
      })

    }else{
      var  Navcode = codeExpress.substr(5);
      let company=codeExpress.substr(0,4);
      console.log(company);
      this.setData({
        code:Navcode,
        company:company
      })
      console.log(Navcode);
    }
    let code=this.data.code;
   
    expresses.where({
      code:code
    }).get().then(res=>{
      this.setData({
      tracesList:res.data,
      Traces:res.data[0].message.Traces
      })
      console.log(res.data);
      let Traces=this.data.Traces;
       this.showdetail();
       this.packageData(Traces);
    })
  
  },
packageData(Traces){
    let array=Traces
    for(let i = 0, length = array.length; i < length; i++) {

      //Math.ceil()向下取整;Math.round()四舍五入;Math.floor()向上取整

      let halfIndex = length % 2 == 0 ? halfIndex = length/ 2 : Math.ceil(length / 2);
      if (i < halfIndex) {
        let leftvalue = array[i],
          rightvalue = array[length - 1 - i];
        array[i] = rightvalue;
        array[length - 1 - i] = leftvalue;
      }
  }
  console.log(array);
  array=array.map(res=>{
    res.AcceptTime=res.AcceptTime.substr(5, 11)
    return res
  })
  console.log(array)
  let array2=array.splice(3);
  this.setData({
    Traces:array,
    Traces2:array2
  })
  let list=this.data.Traces;
  let time1=list[0].AcceptTime;
  let text1=list[0].AcceptStation;
  let time2=list[1].AcceptTime;
  let text2=list[1].AcceptStation;
  let time3 = list[2].AcceptTime;
  let text3=list[2].AcceptStation;
  
  // let text4=text3.substr(1)

  this.setData({
    time1:time1,
    text1:text1,
    time2:time2,
    text2:text2,
    time3:time3,
    text3:text3
  })

  },
  showdetail:function(){
    let list=this.data.tracesList;
    console.log(list);
  },
  // 处理逆地址
  getAddress(lat, lon, name) {
    wx.showLoading({
      title: '定位中',
      mask: true
    })
    let fail = (e) => {
      // console.log(e)
      this.setData({
        address: name || '杭州西湖'
      })
      wx.hideLoading()
    }
    geocoder(
      lat,
      lon,
      (res) => {
        wx.hideLoading()
        let result = (res.data || {}).result
        // console.log(1, res, result)

        if (res.statusCode === 200 && result && result.address) {
          let { address, formatted_addresses, address_component } = result
          if (formatted_addresses && (formatted_addresses.recommend || formatted_addresses.rough)) {
            address = formatted_addresses.recommend || formatted_addresses.rough
          }
          let { province, city, district: county } = address_component
          this.setData({
            province,
            county,
            city,
            address: name || address
          })
          
        } else {
          //失败
          fail()
        }
      },
      fail
    )
  },
  // 更新 data 数据，调用 getAddress
  updateLocation(res) {
    let { latitude: lat, longitude: lon, name } = res
    let data = {
      lat,
      lon
    }
    if (name) {
      data.address = name
    }
    this.setData(data)
    this.getAddress(lat, lon, name)
  },
  getLocation() {
    // 获取经纬度
    wx.getLocation({
      type: 'gcj02',
      success: this.updateLocation,
      fail: (e) => {
        // console.log(e)
        this.openLocation()
      }
    })
  },
  // 检测到失败，则提示用户打开位置权限
  openLocation() {
    wx.showToast({
      title: '检测到您未授权使用位置权限，请先开启哦',
      icon: 'none',
      duration: 3000
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

  }
})