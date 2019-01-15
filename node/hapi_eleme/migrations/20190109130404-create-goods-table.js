'use strict';
module.exports = {
  // 创建数据表的语法，再使用db:migrate创建数据表
  up: (queryInterface, Sequelize) => queryInterface.createTable(
    'goods',// 表名
    {
      // 下面分别是对应字段
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      shop_id: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      thumb_url: Sequelize.STRING,
      created_at: Sequelize.DATE,
      updated_at: Sequelize.DATE,
    },
  ),

  down: queryInterface => queryInterface.dropTable('goods'),
};

