'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Borrow extends Model {
    static associate(models) {
      Borrow.belongsTo(models.Member, {foreignKey: 'member_id'})
      Borrow.belongsTo(models.Book, {foreignKey: 'book_id'})
    }
  }
  Borrow.init({
    member_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    book_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    borrowed_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    expired_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    return_date: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Borrow',
  });
  return Borrow;
};