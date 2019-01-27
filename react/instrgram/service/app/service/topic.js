const Service = require('egg').Service;

class TopicService extends Service {
  async insertTopic (topic) {
    let { ctx } = this;
    return await ctx.model.Topic.create(topic);
  }

  async queryTopicDetail (query) {
    let { ctx } = this
    return await ctx.model.Topic.findOne({
      where: query
    });
  }

  async topicDetailHandler (topicId) {
    const { ctx } = this;
    let topic = await ctx.service.topic.queryTopicDetail({
      topicId: +topicId
    })
    
  } 

  async queryTopicCounts(query) {
    let { ctx } = this

    return await ctx.model.Topic.findAndCountAll({
      where: query,
      order: [['created_at', 'DESC']]
    })
  }


}

module.exports = TopicService;