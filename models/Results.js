
module.exports = function(sequelize, DataTypes) {
    var Results = sequelize.define("Results", {
      // The email cannot be null, and must be a proper email before creation
      // email: {
      //   type: DataTypes.STRING,
      //   allowNull: false,
      //   unique: true,
      //   validate: {
      //     isEmail: true
      //   }
      // },
      // The password cannot be null
      group: {
        type: DataTypes.STRING, //might have to change this to number
        allowNull: false,
        len: [1]
      },
  
      restaurant: {
        type: DataTypes.STRING,
        allowNull: false,
        len: [1]
      },
      
      image: {
        type: DataTypes.STRING,
        allowNull: false,
        len: [1]
      },

      price: {
        type: DataTypes.STRING,
        allowNull: false,
        len:[1]
      },

      matches: {
          type: DataTypes.BOOLEAN,
          allowNull: true,
          len: [1]
      }
    });
    
   Results.associate = function(models) {
      // We're saying that a user should belong to a group
      // A Post can't be created without an Author due to the foreign key constraint
      Results.belongsTo(models.Group, {
        foreignKey: {
          allowNull: false
        }
      });
    };
  
    return Results;
  
  };