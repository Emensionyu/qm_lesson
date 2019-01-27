'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  const apiV2Router = app.router.namespace('/api/v2');
  router.get('/', controller.home.index);
  router.get('/api', controller.api.index);
  // api 版本的
  apiV2Router.post('/login/register', controller.login.register);
  apiV2Router.post('/login', controller.login.loginIn);
  apiV2Router.get('/login/signout', controller.login.singOut);
  apiV2Router.get('/user/info', controller.user.userInfo);

  //follow
  apiV2Router.post('/friend/follow', controller.friend.follow);
  apiV2Router.get('/friend/list', controller.friend.notFollowList);

  //topic
  apiV2Router.post('/topic/add', controller.topic.addTopic);
  apiV2Router.get('/topic/detail', controller.topic.topicDetail);
  
};