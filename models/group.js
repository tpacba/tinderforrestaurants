
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
  // Assosiating user with Group
  Group.associate = function(models) {
    
  //We are saying that a group should belong to a user
    Group.belongsTo(models.User, {
        foreignKey: {
          allowNull: false
        }
      });

  };

  return Group;

};
