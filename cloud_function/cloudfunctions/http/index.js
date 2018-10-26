// require + module.exports   js 模块化规范， commonJS
// import from  export default  es6 模块化   node 6以下不支持
const cloud = require('wx-server-sdk');
const got = require('got');
cloud.init();
const db = cloud.database();

// async 同步 是函数修饰符, es7, 让异步的代码同步化
exports.main = async () => {
  const photoInfos = [];
  const photos = await db.collection("photos").get();
  console.log(photos);
  for(let i = 0; i < photos.data.length; i++) {
    const photo = photos.data[i];
    let openid = photo._openid;
    const user = await db.collection('userInfo').where({
      _openid: openid
    }).get();
    if (user.data.length > 0) {
      photo.user = user.data[0]
    }
    photoInfos.push(photo);
  }
  return photoInfos;
  // 费时， 异步的， 但是想保持执行的顺序和阅读的顺序，
  // 用户表 userInfo  photos 图片
  // database photos   map 
  // userInfo 
  // const photos = [{
  //   _id:,
  //   _openid:,
  //   image:'',
  //   用户的性息
  //   user: {
  //     nickname: '旅梦开发团',
  //     province: '南昌'
  //   }
  // }]

  // let getResponse = await got('httpbin.org/get')
  // console.log(getResponse);
  // let postResponse = await got('httpbin.org/post', {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json'
  //   },
  //   body: JSON.stringify({
  //     title: '这是标题',
  //     value: 123
  //   })
  // })
  // console.log(postResponse.body);
  // // await 让我们的代码等待一下 只有async 才可以用
  // return postResponse.body
}
