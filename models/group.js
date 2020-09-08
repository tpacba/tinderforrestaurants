
module.exports = function(sequelize, DataTypes) {
  var Group = sequelize.define("Group", {
    // The email cannot be null, and must be a proper email before creation
    email: {
      type: DataTypes.STRING,
      allowNull: false,
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
    },

    price: {
      type: DataTypes.STRING,
        allowNull: true,
        len: [1]
    },
    code: {
      type: DataTypes.STRING,
      allowNull: false
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

        Group.hasMany(models.Results, {
          onDelete: "cascade"
        });
      

  };

  return Group;

};
