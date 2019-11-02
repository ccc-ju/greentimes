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
          path: '/mine',
          name: 'mine',
          component: () => import('@/views/Mine'),
          meta: {
            title: "我的"
          }
        },
      ]
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
      path: '/beauty',
      name: 'beauty',
      component: () => import('@/views/Beauty'),
      meta: {
        title: "中国大学"

      }
    },
    {
      path: '/journey',
      name: 'journey',
      component: () => import('@/views/Journey'),
      meta: {
        title: "美哉旅途"
      }
    },
    {
      path: '/architecture',
      name: 'architecture',
      component: () => import('@/views/Architecture'),
      meta: {
        title: "建筑"
      }
    },
    {
      path: '/hotel',
      name: 'hotel',
      component: () => import('@/views/Hotel'),
      meta: {
        title: "酒店"

      }
    },
    {
      path: '/movie',
      name: 'movie',
      component: () => import('@/views/Movie'),
      meta: {
        title: "电影"

      }
    },
    {
      path: '/grab',
      name: 'grab',
      component: () => import('@/views/Grab'),
      meta: {
        title: "抢吧"
      }
    },
    {
      path: '/payMent',
      name: 'payMent',
      component: () => import('@/views/PayMent'),
      meta: {
        title: "青葱支付"

      }
    },
    {
      path: '/account',
      name: 'account',
      component: () => import('@/views/Account'),
      meta: {
        title: "我的账户"

      }
    },

    {
      path: '/rent',
      redirect: '/shouye',
      component: () => import('@/views/Rent'),
      children: [
        {
          path: '/shouye',
          name: 'shouye',
          component: () => import('@/views/Shouye'),
          meta: {
            title: "直租吧"
          }
        },
        {
          path: '/msg',
          name: 'msg',
          component: () => import('@/views/Msg'),
          meta: {
            title: "消息"
          }
        },
        {
          path: '/wode',
          name: 'wode',
          component: () => import('@/views/Wode'),
          meta: {
            title: "我的"
          }
        },
      ]
    },
    {
      path: '/personal',
      name: 'personal',
      component: () => import('@/views/Personal'),
      meta: {
        title: "个人中心"

      }
    },
    {
      path: '/order',
      name: 'order',
      component: () => import('@/views/Order'),
      meta: {
        title: "订单"

      }
    },
    {
      path: '/convert',
      name: 'convert',
      component: () => import('@/views/Convert'),
      meta: {
        title: "兑换"

      }
    },
    {
      path: '/nurse',
      name: 'nurse',
      component: () => import('@/views/Nurse'),
      meta: {
        title: "奶妈"

      }
    },
    {
      path: '/film',
      name: 'film',
      component: () => import('@/views/Film'),
      meta: {
        title: "电影"

      }
    },
  ]
})

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

export default router;
