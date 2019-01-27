'use strict';

const Controller = require('egg').Controller;

class TopicController extends Controller {
  async topicDetail () {
    const { ctx } = this;
    const {topicId} = ctx.request.query
    let topicDetail = await ctx.service.topic.topicDetailHandler(topicId);
    ctx.returnBody(200, "成功", topicDetail); 
  }
  async addTopic () { 
    const { ctx } = this;
    const { topicImg, topicTitle } = ctx.request.body;
    let userId = ctx.user.userId

    let newTopic = {
      topicImg: JSON.stringify(topicImg),
      topicTitle: topicTitle,
      userId
    }

    console.log(newTopic, '----------');

    await ctx.service.topic.insertTopic(newTopic);
    ctx.returnBody(200, '发贴成功');
  }
}

module.exports = TopicController;