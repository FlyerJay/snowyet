
module.exports = app => {
  app.get('/app/api/article/list', app.controller.app.app.list);
  app.get('/app/api/article/:id', app.controller.app.app.detail);
  app.get('/less', app.controller.css.css.less);
  app.get('/css/module', app.controller.css.css.module);
  app.get('/sass', app.controller.css.css.sass);
  app.get('/app(/.+)?', app.controller.app.app.index);
  app.get('(/.+)?', app.controller.app.app.index);
};
