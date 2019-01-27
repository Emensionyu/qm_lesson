const Service = require('egg').Service;

class FollowService extends Service {
  async followUser (followUser) {
    let { ctx } = this
    // 有没有两者关系的记录? update 
    const obj = await ctx.model.Follow.findOne({
      where: {
        userId: followUser.userId,
        followedId: ctx.user.userId
      }
    })
    if(obj) {
      return await obj.update(followUser);
    } else {
      return await ctx.model.Follow.create(followUser);
    }
  }
}

module.exports = FollowService;