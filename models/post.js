'use strict';
const {
  Model
} = require('sequelize');
const config = require("../config/app");
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Post.init({
    title: DataTypes.STRING,
    image: {
      type: DataTypes.STRING,
      get() {
        const avatar = this.getDataValue('avatar')
        const url = `${config.appUrl}:${config.appPort}`

        if (!avatar) {
          return `${url}/${this.getDataValue('gender')}.svg`
        }

        const id = this.getDataValue('id')
        return `${url}/user/${id}/${avatar}`
      }
    }
  }, {
    sequelize,
    modelName: 'Post',
  });
  return Post;
};
