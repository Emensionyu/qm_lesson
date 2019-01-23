- egg.js post 提交默认有安全防攻击
CSRF 跨站请求伪造，
 在config.default.js 里设置
  config.security={csrf:{ enable:false}}不启动
   package:'egg-router-plus'
  yarn add egg-router-plus
  yarn add sequelize mysql2
  模型
  yarn add egg-sequelize
  在config.default.js和plugin里配置

    db:migrate:undo 回滚重新创建表
  最后采坑 在postman里发送请求 手动设置username，password，email
  ctx.request.body才可以拿到
