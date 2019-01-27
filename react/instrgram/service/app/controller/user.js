'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  async userInfo () {
    const { ctx } = this;
    let userId = ctx.query.userId || ctx.user.userId;
    console.log(userId);
    let user = await this.service.user.getUserByUserId(userId);
    let userInfo = {
      username: user.username,
      email: user.email,
      avatarUrl: user.avatarUrl,
      abstract: user.abstract,
      account: user.email.replace(/@.*/, ''),
      mobile: user.mobile,
      sex: user.sec,
      userId: user.userId
    }
    ctx.returnBody(200, '获取成功', userInfo);
  }
}

module.exports =  UserController;