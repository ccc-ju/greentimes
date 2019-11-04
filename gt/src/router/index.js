import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

var router = new Router({
  routes: [{
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
      children: [{
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
          },
        },

      ]
    },
    {
      path: '/aegean',
      name: 'aegean',
      component: () => import('@/views/Aegean'),
      meta: {
        title: "爱琴海"
      },
    },
    {
      path: '/information',
      name: 'information',
      component: () => import('@/views/information'),
      meta: {
        title: "个人信息"
      },
    },
    {
      path: '/nc',
      name: 'nc',
      component: () => import('@/views/Nc'),
      meta: {
        title: "昵称"
      },
    },
    {
      path: '/autograph',
      name: 'autograph',
      component: () => import('@/views/Autograph'),
      meta: {
        title: "个性签名"
      },
    },
    {
      path: '/qrcode',
      name: 'qrcode',
      component: () => import('@/views/QRcode'),
      meta: {
        title: "我的二维码"
      },
    },
    {
      path: '/identity',
      name: 'identity',
      component: () => import('@/views/Identity'),
      meta: {
        title: "请完善身份资料"
      },
    },
    {
      path: '/education',
      name: 'education',
      component: () => import('@/views/Education'),
      meta: {
        title: "请完善最高学历资料"
      },
    },
    {
      path: '/city',
      name: 'city',
      component: () => import('@/views/City'),
      meta: {
        title: "请选择城市"
      },
    },
    {
      path: '/island',
      name: 'island',
      component: () => import('@/views/Island'),
      meta: {
        title: "岛主星级介绍"
      },
    },
    {
      path: '/perEdit',
      name: 'perEdit',
      component: () => import('@/views/PerEdit'),
      meta: {
        title: "个性编辑"
      }
    },
    {
      path: '/mineEdit',
      name: 'mineEdit',
      component: () => import('@/views/MineEdit'),
      meta: {
        title: "我的编辑"
      }
    },
    {
      path: '/edit',
      name: 'edit',
      component: () => import('@/views/Edit'),
      meta: {
        title: "编辑"
      }
    },
    {
      path: '/drafts',
      name: 'drafts',
      component: () => import('@/views/Drafts'),
      meta: {
        title: "草稿箱"
      }
    },
    {
      path: '/freshPay',
      name: 'freshPay',
      component: () => import('@/views/FreshPay'),
      meta: {
        title: "青葱支付"
      }
    },
    {
      path: '/account1',
      name: 'account1',
      component: () => import('@/views/Account1'),
      meta: {
        title: "账户安全"
      }
    },
    {
      path: '/changePh',
      name: 'changePh',
      component: () => import('@/views/ChangePh'),
      meta: {
        title: "修改手机号"
      }
    },
    {
      path: '/changePsw',
      name: 'changePsw',
      component: () => import('@/views/ChangePsw'),
      meta: {
        title: "修改密码"
      }
    },
    {
      path: '/service',
      name: 'service',
      component: () => import('@/views/Service'),
      meta: {
        title: "客服中心"
      }
    },
    {
      path: '/feedback',
      name: 'feedback',
      component: () => import('@/views/Feedback'),
      meta: {
        title: "客服中心"
      }
    },
    {
      path: '/set',
      name: 'set',
      component: () => import('@/views/Set'),
      meta: {
        title: "设置"
      }
    },
    {
      path: '/notification',
      name: 'notification',
      component: () => import('@/views/Notification'),
      meta: {
        title: "消息通知"
      }
    },
    {
      path: '/cache',
      name: 'cache',
      component: () => import('@/views/Cache'),
      meta: {
        title: "缓存管理"
      }
    },
    {
      path: '/aboutMe',
      name: 'aboutMe',
      component: () => import('@/views/AboutMe'),
      meta: {
        title: "关于我们"
      }
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
      children: [{
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
      path: '/detail/:_id',
      name: 'detail',
      component: () => import('@/views/Detail'),
      meta: {
        title: "商品详情"
      }
    },
    {
      path: '/cart',
      name: 'cart',
      component: () => import('@/views/Cart'),
      meta: {
        title: "购物车"
      }
    },
    {
      path: '/addressList',
      name: 'addressList',
      component: () => import('@/views/AddressList'),
      meta: {
        title: "收货地址"
      }
    },
    {
      path: '/addressEdit',
      name: 'addressEdit',
      component: () => import('@/views/AddressEdit'),
      meta: {
        title: "地址编辑"
      }
    },
    {
      path: '/food',
      name: 'food',
      component: () => import('@/views/Food'),
      meta: {
        title: "美食攻略"

      }
    },
    {
      path: '/milk',
      name: 'milk',
      component: () => import('@/views/Milk'),
      meta: {
        title: "奶妈"

      }
    },
    {
      path: '/cation',
      name: 'cation',
      component: () => import('@/views/Cation'),
      meta: {
        title: "搭配"

      }
    },
    {
      path: '/little',
      name: 'little',
      component: () => import('@/views/Little'),
      meta: {
        title: "一点通"
      }
    },
    {
      path: '/struggle',
      name: 'struggle',
      component: () => import('@/views/Struggle'),
      meta: {
        title: "奋青"
      }
    },
    {
      path: '/colleage',
      name: 'colleage',
      component: () => import('@/views/Colleage'),
      meta: {
        title: "馅儿饼"
      }
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
