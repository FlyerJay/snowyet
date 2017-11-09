'use strict';

module.exports = app => {
    class UserController extends app.Controller {
        * login() {
            const ctx = this.ctx;
            const user = yield ctx.model.User.login(ctx.request.body);
            //这里省略了登录设置cookie，暂时只实现了后端无状态的登录，返回数据前端处理
            ctx.body = user;//返回结果给客户端
        }
        * register() {
            const ctx = this.ctx;
            ctx.body = yield ctx.model.User.register(ctx.request.body);
        }
    }
    return UserController;
}