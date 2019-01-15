'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      // 给表添加字段
      queryInterface.addColumn('shops', 'address', {
        type: Sequelize.STRING
      })
    ])
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
  },

  down: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.removeColumn('shops', 'address')
    ])
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
