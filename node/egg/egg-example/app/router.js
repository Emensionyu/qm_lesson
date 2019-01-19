'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/news',controller.news.list);
  router.get('/news/:id',controller.news.list)
};
//mvc里面的 首页路由 由controller里的home配置