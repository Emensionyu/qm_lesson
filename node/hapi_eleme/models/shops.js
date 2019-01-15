module.exports = (sequelize, DataTypes) => sequelize.define(
  'shops',
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
    thumb_url: DataTypes.STRING
  },
  {
    tableName: 'shops',
    // charset: 'utf8',
    // collate: 'utf8_general_ci'
  }
)