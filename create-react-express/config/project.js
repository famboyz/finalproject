module.exports = function(sequelize, DataTypes) {
    var Project = sequelize.define("Project", {
      // The email cannot be null, and must be a proper email before creation
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      // The password cannot be null
      description: {
        type: DataTypes.STRING,
        allowNull: false
      },
      email: {
          type:DataTypes.STRING,
          allowNull: false
      },
    })
}