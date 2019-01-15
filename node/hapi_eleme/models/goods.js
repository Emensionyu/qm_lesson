module.exports = (sequelize, DataTypes) => sequelize.define(
  'goods',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    thumb_url: DataTypes.STRING,
    shop_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  },
  {
    tableName: 'goods',
    // charset: 'utf8',
    // collate: 'utf8_general_ci'
  }
)