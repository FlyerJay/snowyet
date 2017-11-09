
module.exports = app => {
  // app.beforeStart(async function(){
  //     await app.model.sync();
  // });
  //用户
  app.get('/app/api/login','user.login');
  app.get('/app/api/register','user.register');

  app.get('/app/api/article/list', app.controller.app.app.list);
  app.get('/app/api/article/:id', app.controller.app.app.detail);
  app.get('(/.+)?', app.controller.app.app.index);
};
