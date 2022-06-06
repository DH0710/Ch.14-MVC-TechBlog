const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userData = [
  {
    username: 'zeldamonarch',
    email: 'zeldaxBOTW@nintendo.com',
    password: 'password123'
  },
  {
    username: 'xaiverhawthorne95',
    email: 'XH95@yahoo.com',
    password: 'password123'
  },
  {
    username: 'Alex118',
    email: 'alexanderthegreat118.com',
    password: 'password123'
  },
  {
    username: 'Maxey46',
    email: 'SuperMax@gmail.com',
    password: 'password123'
  },
  {
    username: 'EdnaM',
    email: 'EDM94@yahoo.com',
    password: 'password123'
  },
  {
    username: 'MiguelFH34',
    email: 'FH34@yahoo.com',
    password: 'password123'
  },
  {
    username: 'Rose23',
    email: 'Amber23@gmail.com',
    password: 'password123'
  },
  {
    username: 'RickyBobby95',
    email: 'TalledegaKnights@gmail.com',
    password: 'password123'
  },
  {
    username: 'WhitneyBabino94',
    email: 'Whitney94@gmail.com',
    password: 'password123'
  },
  {
    username: 'Kendrick Lamar',
    email: 'Kdot@yahoo.com',
    password: 'password123'
  }
];

const seedUsers = () => User.bulkCreate(userData, {individualHooks: true});

module.exports = seedUsers;