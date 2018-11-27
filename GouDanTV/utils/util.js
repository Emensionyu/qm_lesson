const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}
//通用性的对wx.request封装

const $get=(url,data={})=>{
  //发送请求
  return new Promise((resolve,reject)=>{
    wx.request({
      url: url,
      data: data,
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function(res){
        resolve(res)
  
      
      },
      fail: function() {
        reject()
  
      },
      complete: function() {
    
      }
    })

  })


}
module.exports = {
  $get,
  formatTime: formatTime
}
