const cloud = require('wx-server-sdk')

cloud.init()

const db = cloud.database();
const course_info = db.collection('getExpresses');

// 云函数入口函数
exports.main = async (event, context) => {
  try {
     await db.collection('getExpresses').where({
      id:event.id
    }).remove()
  } catch (e) {
    console.error(e)
  }
}