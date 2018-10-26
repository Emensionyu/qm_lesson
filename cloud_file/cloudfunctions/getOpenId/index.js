// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
    // event 可以拿到OpenId 拿到用户
    console.log(event);
    return event.userInfo

}   