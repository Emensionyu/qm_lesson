import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import mensionyu from '@/components/mensionyu'
import hi1 from '@/components/hi1'
import params from '@/components/params'
import Error from '@/components/Error'
import Count from '@/components/Count'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/mensionyu',
      name: 'mensionyu',
      component: mensionyu
    },
    {
      path: '/hi1',
      name: 'hi1',
      component: hi1
    },
    {
      path:'/params/:newsId/:newsTitle',
      name: 'params',
      component: params
    },
    {
      path:'*',
      component: Error
    },
    {
      path:'/count',
      name: 'count',
      component:Count
    },
  ]
})
