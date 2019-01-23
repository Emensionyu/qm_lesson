const Controller = require('egg').Controller;

class LoginController extends Controller {
  async register() {
    const {ctx}=this;
    const { password,username,email}=ctx.request.body;
    console.log(password)
    // ctx.body=`${password},${username},${email}`;
    await ctx.service.user.register({password,username,email})
   
  }
}

module.exports = LoginController;
