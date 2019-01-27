'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, STRING, NOW, DATE } = Sequelize;
    await queryInterface.createTable('follow', {
      id: { type: INTEGER(10), primaryKey: true, autoIncrement: true },
      userId: { type: STRING(255)},
      followedId: { type: STRING(255)},
      status: { type: INTEGER(1), allowNull: false },
      created_at: { type: DATE, defaultValue: NOW },
      updated_at: { type: DATE, defaultValue: NOW },
    })
  },

  down: async (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.
      Example:
      return queryInterface.dropTable('users');
    */
    await queryInterface.dropTable('follow');
  }
};