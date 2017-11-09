const path = require('path');
const fs = require('fs');
module.exports = app => {
  const exports = {};

  exports.siteFile = {
    '/favicon.ico': fs.readFileSync(path.join(app.baseDir, 'app/web/asset/images/favicon.ico'))
  };

  exports.view = {
    cache: false
  };

  exports.vuessr = {
    layout: path.join(app.baseDir, 'app/web/view/layout.html'),
    injectRes: [
      // {
      //  inline: true,
      //  url: path.join(app.baseDir, 'app/web/framework/inject/inline.js')
      // },
      // {
      //  inline: true,
      //  manifest: true,
      //  url: 'pack/inline.js'
      // }
    ]
  };

  exports.logger = {
    consoleLevel: 'DEBUG',
    dir: path.join(app.baseDir, 'logs')
  };

  exports.static = {
    prefix: '/public/',
    dir: path.join(app.baseDir, 'public')
  };

  exports.sequelize = {
    dialect: 'mysql', // support: mysql, mariadb, postgres, mssql
    database: 'snowyet',
    host: '118.190.207.142',
    port: '3306',
    username: 'flyerjay',
    password: '080728',
  }

  exports.keys = '123456';

  exports.middleware = [
    'access'
  ];

  return exports;
};
