'use strict';

const Controller = require('egg').Controller;

class LoginController extends Controller {
  async loginIn () {
    const { ctx } = this;
    const { password, email } = ctx.request.body;

    const token = await ctx.service.user.login({password, email});
    if (token) {
      const opts = {
        path: '/',
        maxAge: 10000*60*60*24*7,
        // httpOnly: false,
        // domain: '127.0.0.1'
      };
      ctx.cookies.set(this.config.auth_cookie_name, token, opts);
      // console.log(ctx.cookies.get(this.config.auth_cookie_name, token, opts));
      ctx.returnBody(200, "登录成功");
    } else {
      ctx.throw(400, '用户名或密码错误');
    }
  }
  async register() {
    const { ctx } = this;
    const { password, username, email } = ctx.request.body;
    // ctx.body = `${password}, ${username}, ${email}`;
    await ctx.service.user.register({password, username, email});
  }
  async singOut() {
    const { ctx } = this;
    ctx.cookies.set(this.config.auth_cookie_name, "");
    ctx.returnBody(200, '退出登录成功');
  }
}

module.exports = LoginController;