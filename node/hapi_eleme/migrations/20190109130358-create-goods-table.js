module.exports={
  up:(queryInterface,Sequelize)=>
  //声明完成数据表创建
  queryInterface.createTable(
    'goods',
    {
      id:{
        type:Sequelize.INTEGER,
        autoIncreament:true,
        primaryKey:true
      },
      shop_id:{
        type:Sequelize.INTEGER,
        allowNull:false

      },
      name:{
        type:Sequelize.STRING,
        allowNull:false
      },
      thumb_url:Sequelize.STRING,
      created_at:Sequelize.DATE,
      updated_at:Sequelize.DATE
      
    }
  ) ,
  down:queryInterface=>queryInterface.dropTable('goods')
}