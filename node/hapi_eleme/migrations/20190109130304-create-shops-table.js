'use strict';
module.exports = {
  // 创建数据表的语法，再使用db:migrate创建数据表
  up: (queryInterface, Sequelize) => queryInterface.createTable(
    'shops',// 表名
    {
      // 下面分别是对应字段
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      thumb_url: Sequelize.STRING,
      created_at: Sequelize.DATE,
      updated_at: Sequelize.DATE,
    },{
      // 时间戳
      // timestamps: true, 
      // // 强调
      // underscored: true, 
      // // 偏执
      // paranoid: true, 
      // // 冻结表名，如果不加会在创建表的时候在后面加上 (s)
      // // freezeTableName: true, 
      // // 表名
      // // tableName: 'user', 
      // // 编码
      // charset: 'utf8', 
      // collate: 'utf8_general_ci'
    }
  ),

  down: queryInterface => {
    return queryInterface.dropTable('shops');
  },
};
