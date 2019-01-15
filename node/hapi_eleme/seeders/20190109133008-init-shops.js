const timestamps = {
  created_at: new Date(),
  updated_at: new Date()
}

module.exports = {
  up: queryInterface => queryInterface.bulkInsert(
    'shops',
    [
      { id: 1, name: 'dianpu1', thumb_url:'1.png', ...timestamps},
      { id: 2, name: 'dianpu2', thumb_url:'2.png', ...timestamps},
      { id: 3, name: 'dianpu3', thumb_url:'3.png', ...timestamps},
      { id: 4, name: 'dianpu4', thumb_url:'4.png', ...timestamps}
    ]
  ),
  down: (queryInterface, Sequelize) => {
    const { Op } = Sequelize;
    return queryInterface.bulkDelete('shops', {id: {[Op.in]:[1,2,3,4]}},{})
  }
}
