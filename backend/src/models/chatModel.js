module.exports = (sequelize, DataTypes) => {
  const Chat = sequelize.define('Chat', {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      autoIncrement: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      foreignKey: true,
    },
    messages: {
      type: DataTypes.JSON,
      allowNull: false,
    },
  },
  {
    timestamps: false,
    tableName: 'chats',
    underscored: true,
  });

  Chat.associate = (models) => {
    Chat.belongsTo(models.User, { foreignKey: 'userId', as: 'users' });
  };

  return Chat;
};
