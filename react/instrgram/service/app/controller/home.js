'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    this.ctx.body = 'hi, egg' + JSON.stringify(this.ctx.user);
  }
}

module.exports = HomeController;