'use strict';

const Controller = require('egg').Controller;

class ApiController extends Controller {
  async index() {
    this.ctx.body = this.ctx.user;
  }
}

module.exports = ApiController;