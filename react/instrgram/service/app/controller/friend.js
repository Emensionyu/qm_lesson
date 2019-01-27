'use strict';

const Controller = require('egg').Controller;

class FriendController extends Controller {
  async follow() {
    const {ctx} = this;
    const { userId, status } = ctx.request.body;

    let followedId = ctx.user.userId;

    let followMsg = {
      userId,
      followedId,
      status
    }

    await ctx.service.follow.followUser(followMsg);
    ctx.returnBody(200, +status?'关注成功':'取消关注');
  }
  async notFollowList () {
    const {ctx} = this;
    let userId = ctx.user.userId;

    let friendList = await ctx.service.user.getUserList(userId);
    ctx.returnBody(200, "获取成功", friendList);
  }
}

module.exports = FriendController;