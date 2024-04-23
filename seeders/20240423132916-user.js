"use strict";
const bcrypt = require("bcrypt");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert("users", [
      {
        email: "raafi.superadmin@gmail.com",
        password: bcrypt.hashSync("123", 10),
        name: "superadmin_raafi",
        photo: null,
        role: "superadmin",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: "raafi.admin@gmail.com",
        password: bcrypt.hashSync("123", 10),
        name: "admin_raafi",
        photo: null,
        role: "admin",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: "raafi.user@gmail.com",
        password: bcrypt.hashSync("123", 10),
        name: "user_raafi",
        photo: null,
        role: "user",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("users", null, {});
  },
};
