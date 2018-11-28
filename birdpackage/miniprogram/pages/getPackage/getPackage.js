// miniprogram/pages/getPackage/getPackage.js
const db = wx.cloud.database()
const getExpresses = db.collection('getExpresses')
const app = getApp()
const QQ_MAP_KEY = 'TKIBZ-QOAH3-6YC37-3BUFY-S6BJO-5CBG'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    show: false,
    username: '',
    password: '',
    packageShow: "true",
    getPackageList:[]
  },
  onCancel() { // 点击拒绝
    let dialogComponent = this.selectComponent('.wxc-dialog');
    dialogComponent && dialogComponent.hide();
  },
  onSHowdialog(){
    let dialogComponent = this.selectComponent('.wxc-dialog');
    dialogComponent && dialogComponent.show();

  },
  getList() {
    getExpresses.get({
    }).then(res=>{
      console.log(res);
      this.setData({
        getPackageList:res.data

      })
    }).catch(err=>{
      console.log(err)
    })

  },
  confirm:function(event){
    console.log(event);
    // let id=event.currentTarget.dataset.id;
    // console.log(id);
    wx.cloud.callFunction({
      // 云函数名称
      name: "changeExpress",
      // 传给云函数的参数
      data: {
        id: 1
      }
    }).then(res=>{
      console.log(res);

    }).catch(err=>{
      console.log(err);
    })
    getExpresses.get({
    }).then(res => {
      console.log(res);
      // let t1=res.data[0].getPackageList;
      this.setData({
        getPackageList: res.data

      })
    }).catch(err => {
      console.log(err)
    })

  },
  
 
  chooseLocation() {
    wx.chooseLocation({
      success: (res) => {
        let { latitude, longitude } = res
        let { lat, lon } = this.data
        if (latitude == lat && lon == longitude) {
          // this.getWeatherData()
        } else {
          this.updateLocation(res)
        }
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  getAddress(lat, lon, name) {
    wx.showLoading({
      title: '定位中',
      mask: true
    })
    let fail = (e) => {
      // console.log(e)
      this.setData({
        address: name || '东华理工大学'
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
          this.getWeatherData()
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
  onLoad: function (options) {
    this.getList();
   

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