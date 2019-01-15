module.exports = [
  {
    method: 'GET',
    path: '/',
    handler: (request, reply) => {
      reply('hapi');
    },
    config: {
      tags: ['api', 'root/'],
      description: '测试hello-hapi'
    }
  }
  ,{
    method: 'GET',
    path: '/test',
    handler: (request, reply) => {
      reply('hello test');
    },
    config: {
      tags: ['api', 'test'],
      description: '测试 test'
    }
  }
]