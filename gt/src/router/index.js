import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

var router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/ydy'
    },
    {
      path: '/ydy',
      redirect: '/berLogin',
      name: 'ydy',
      component: () => import('@/views/Ydy'),
    },
    {
      path: '/berLogin',
      name: 'berLogin',
      component: () => import('@/views/BerLogin'),
    },
    {
      path: '/berRegister',
      name: 'berRegister',
      component: () => import('@/views/berRegister'),
      meta: {
        title: "注册"
      }
    },

    {
      path: '/berForget',
      name: 'berForget',
      component: () => import('@/views/BerForget'),
      meta: {
        title: "忘记密码"
      }
    },
    {
      path: '/index',
      redirect: '/home',
      component: () => import('@/views/Index'),
      children: [
        {
          path: '/home',
          name: 'home',
          component: () => import('@/views/Home'),
          meta: {
            title: "首页"
          }
        },

        {
          path: '/chat',
          name: 'chat',
          component: () => import('@/views/Chat'),
          meta: {
            title: "消息"
          }
        },
        {
          path: '/book',
          name: 'book',
          component: () => import('@/views/Book'),
          meta: {
            title: "通讯录"
          },
        },
            {
              path: '/addFri',
              name: 'addFri',
              component: () => import('@/views/AddFri'),
              meta: {
                title: "添加好友"
              }
            },
            {
              path: '/newFri',
              name: 'newFri',
              component: () => import('@/views/NewFri'),
              meta: {
                title: "验证消息"
              }
            },
            {
              path: '/blackList',
              name: 'blackList',
              component: () => import('@/views/BlackList'),
              meta: {
                title: "黑名单"
              }
            },
            {
              path: '/friList',
              name: 'friList',
              component: () => import('@/views/FriList'),
              meta: {
                title: "用户信息"
              }
            },
        
        {
          path: '/mine',
          name: 'mine',
          component: () => import('@/views/Mine'),
          meta: {
            title: "我的"
          }
        },
      ]
    }
  ]


})

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

export default router;
