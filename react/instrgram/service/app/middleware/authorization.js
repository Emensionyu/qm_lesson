module.exports = (options, app) => {
    return async function(ctx, next) {
      if (app.config.authWhiteList.indexOf(ctx.url) !== -1) {
        await next(options);
        return;
      }
      if (ctx.cookies.get('token')) {
        let token = ctx.cookies.get('token');
        try {
          ctx.jwt.verify(token, app.config.jwtSecret);
        } catch(e) {
          ctx.returnBody(401, "you dont't access to get data");
          return;
        }
        await next(options);
      } else {
        ctx.returnBody(401, "you don't access to get data");
        return;
      }
    }
  }