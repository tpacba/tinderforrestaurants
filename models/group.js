
module.exports = function(sequelize, DataTypes) {
  var Group = sequelize.define("Group", {
    // The email cannot be null, and must be a proper email before creation
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    // The password cannot be null
    category: {
      type: DataTypes.STRING,
      allowNull: true
    },

    city: {
        type: DataTypes.STRING,
        allowNull: false,
        len: [1]
    }


  });
  
  Group.associate = function(models) {
    // We're saying that a Post should belong to an Author
    // A Post can't be created without an Author due to the foreign key constraint
    Group.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Group;

};
