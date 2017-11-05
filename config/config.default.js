'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1509884402425_7074';

  // add your config here
  config.middleware = [];

  config.sequelize = {
    dialect: 'mysql', // support: mysql, mariadb, postgres, mssql
    database: 'blog',
    host: '118.190.207.142',
    port: '3306',
    username: 'flyerjay',
    password: '080728',
  }

  return config;
};
