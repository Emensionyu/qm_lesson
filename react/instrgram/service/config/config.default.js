'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1548144146726_7792';

  // add your config here
  config.middleware = [];
  config.security={csrf:{ enable:false}}
  config.sequelize={
    dialect:'mysql',
    host:'127.0.0.1',
    port:3306,
    password:'123',
    database:'learn'
  }
  config.password_secret='mensionyu94';
  config.auth_cookie_name='hahaha';
  config.jwtSecret='oosehun'
  return config;
};
