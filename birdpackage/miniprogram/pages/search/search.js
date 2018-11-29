// pages/search/index.js
// import { Base64,md5} from '../../utils/util'
var util = require('../../utils/util.js')
const db = wx.cloud.database()
const expresses = db.collection('expresses')
const app = getApp()
Page({
  data: {
    no: "",
    number: [],
    historyList: [],
    companyList: [],
    delectHistory: "清楚历史记录",
    historyOrder: "历史记录",
    src: '',
    company: '',
    checked: true,
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
        "codename": "TD",
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
  onChange({ detail }) {
    // 需要手动对 checked 状态进行更新
    this.setData({ checked: detail });
  },

  /**
   * 页面的初始数据
   */
  getExpressInfo: function (nu, cb) {
    //查物流
    //快递公司和，快递单号
    let companyname = wx.getStorageSync("codename") || "YTO";
    let company = wx.getStorageSync("company") || "圆通快递";
    console.log(companyname);
    let exp = nu.currentTarget.dataset.name
    var logistics = [companyname, exp];
    this.setData({
      ShipperCode: logistics[0],
      LogisticCode: logistics[1]

    })
    //数据内容
    var RequestData = "{'OrderCode':'','ShipperCode':'" + logistics[0] + "','LogisticCode':'" + logistics[1] + "'}"
    //utf-8编码的数据内容
    // OrderCode	String	订单编号	O
    // ShipperCode	String	快递公司编码	R
    // LogisticCode	String	物流单号
    console.log(RequestData)
    var RequestDatautf = encodeURI(RequestData)
    console.log("RequestDatautf:" + RequestDatautf) //签名
    console.log(RequestData + 'eb016c6c-ab32-47b2-be8c-8fddf3f59c1e')
    var DataSign = encodeURI(util.Base64((util.md5(RequestData + 'eb016c6c-ab32-47b2-be8c-8fddf3f59c1e'))))
    console.log("DataSign:" + DataSign)
    if (logistics != null && exp > 999) {
      wx.request({
        url: 'https://api.kdniao.com/Ebusiness/EbusinessOrderHandle.aspx',
        data: {
          //数据内容(进行过url编码)
          'RequestData': RequestDatautf,
          //电商ID
          'EBusinessID': '1399017',
          //请求指令类型：1002
          'RequestType': '1002',
          //数据内容签名把（请求内容（未编码）+ApiKey）进行MD5加密，然后Base64编码，最后进行URL（utf-8）编码
          'DataSign': DataSign,
          //请求、返回数据类型： 2-json；
          'DataType': '2',
        },
        header: {
          'content-type': 'application/json'
        },
        success: (res) => {
          console.log(res)
          let list = wx.getStorageSync("historys") || [];
          var item = {
            company: company,
            code: logistics[1]
          }
          if (list == null || list.length === 0 || list.every(res => { return res.code !== logistics[1] })) {
            list.push(item);
          }
          wx.setStorage({
            key: 'historys',
            data: list,
          })
          this.setData({
            historyList: list
          })
          this.setData({
            delectHistory: "清楚历史记录",
            historyOrder: "历史记录"
          })
          // this.setData({ mydata: res.data})
          if (!res.data.Reason) {//请求成功并且有完整的物流信息即加入数据库，
            expresses.where({
              code: exp
            }).count().then(res3 => {
              if (res3.total == 0) {
                expresses.add({
                  data: {
                    message: res.data,
                    code: exp
                  }
                })
              } else {
                // wx.showToast({
                //   // title: '不能重复加'
                // })
              }

            })
              .then(res2 => {
                if (res.data.State > 1) {
                  wx.navigateTo({
                    url: '../Todetail/index',
                  })
                }
                wx.setStorage({
                  key: 'code',
                  data: exp,
                }),
                  wx.setStorage({
                    key: 'nowcompany',
                    data: logistics[0],
                  })

              })

          }


        }
      })
    }

  },
  showHistory() {
    let list = wx.getStorageSync("historys");
    this.setData({
      historyList: list
    })
  },
  onChange(e) {
    console.log(e);
    this.setData({
      no: e.detail
    })
  },
  cancel() {
    wx.navigateBack({

    })
  },
  selectCompany() {
    wx.navigateTo({
      url: '../selectCompany/selectCompany',
    })
  },
  onCancel(event) {
    wx.showToast({
      title: '取消',
      icon: 'none'
    })
  },
  onCancel() { // 点击拒绝
    let dialogComponent = this.selectComponent('.wxc-dialog');
    dialogComponent && dialogComponent.hide();
  },
  onSHowdialog() {
    let dialogComponent = this.selectComponent('.wxc-dialog');
    dialogComponent && dialogComponent.show();

  },
  delectHistory(event) {
    let dialogComponent = this.selectComponent('.wxc-dialog');
    dialogComponent && dialogComponent.hide();
    wx.clearStorage();
    let list = wx.getStorageSync("historys");
    list = null;
    wx.setStorage({
      key: 'historys',
      data: list,
    })
    // let text=this.data.delectHistory,
    this.setData({
      delectHistory: "",
      historyOrder: "",
      historyList: ""
    })

    this.showHistory();

  },
  delectoneHistory(event) {
    console.log(event);
    let code = event.currentTarget.dataset.code;
    console.log(code);
    let list = wx.getStorageSync("historys") || [];
    if (list.length == 1) {
      this.delectHistory();
    }
    for (let i = 0; i < list.length; i++) {
      if (list[i].code = code) {
        list.splice(i, 1);
        break;
      }
    }
    console.log(list);
    wx.setStorage({
      key: 'historys',
      data: list,
    })
    this.setData({
      historyList: list
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.getStorage({
      key: 'company',
      success: (res) => {
        this.setData({
          company: res.data
        })
      },
    }),
      wx.getStorage({
        key: 'src',
        success: (res) => {
          this.setData({
            src: res.data
          })
        },
      })
    this.showHistory();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.showHistory();
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