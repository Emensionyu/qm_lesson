'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1547825575207_6330';
  config.view={
    defaultViewEngine:'nunjucks',
    mapping:{
      '.tpl':'nunjucks'
    }

  }
  // add your config here
  config.middleware = [];

  return config;
};
