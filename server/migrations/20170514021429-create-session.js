module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable('Sessions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      UserId: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      description: {
        type: Sequelize.STRING,
        allowNUll: true,
      },
      startTime: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      endTime: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    }),
  down: (queryInterface /* , Sequelize */) => queryInterface.dropTable('Sessions'),
};
