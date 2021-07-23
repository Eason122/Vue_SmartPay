import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },
  {
    path: '/',
    component: Layout,
    // redirect: '/',
    children: [
      {
        path: 'dashboard',
        component: () => import('@/views/dashboard/index'),
        name: '',
        meta: { title: '首頁', icon: 'dashboard', affix: true }
      }
    ]
  },

  {
    path: '/Vendor_Information', // 廠商資料
    component: Layout,
    // redirect: '/Vendor_Information', // 首頁項目
    meta: { title: '廠商資料', icon: 'el-icon-s-help' },
    children: [
      {
        path: '1-1',
        name: '1-1.vue',
        component: () => import('@/views/Vendor_Information/1-1'),
        meta: { title: '廠商基本資料', icon: '' }
      },
      {
        path: '1-2',
        name: '1-2.vue',
        component: () => import('@/views/Vendor_Information/1-2'),
        meta: { title: '特約會員合約條件商議申請', icon: '' }
      },
      {
        path: '1-3',
        name: '1-3.vue',
        component: () => import('@/views/Vendor_Information/1-3'),
        meta: { title: '手續費設定', icon: '' }
      }
    ]
  },

  {
    path: '/System_Development', // 系統開發
    component: Layout,
    meta: { title: '系統開發管理', icon: 'el-icon-s-help' },
    children: [
      {
        path: '2-1',
        name: '2-1.vue',
        component: () => import('@/views/System_Development/2-1'),
        meta: { title: '交易狀態代碼查詢', icon: '' }
      },
      {
        path: '2-2',
        name: '2-2.vue',
        component: () => import('@/views/System_Development/2-2'),
        meta: { title: '系統介接查詢', icon: '' }
      },
      {
        path: '2-3',
        name: '2-3.vue',
        component: () => import('@/views/System_Development/2-3'),
        meta: { title: '帳號權限及密碼設定', icon: '' }
      }
    ]
  },
  {
    path: '/Credit_Card_Acquiring', // 信用卡收單
    component: Layout,
    meta: { title: '信用卡收單', icon: 'el-icon-s-help' },
    children: [
      {
        path: '3-1',
        name: '3-1.vue',
        component: () => import('@/views/Credit_Card_Acquiring/3-1'),
        meta: { title: '信用卡授權資訊', icon: '' }
      },
      {
        path: '3-2',
        name: '3-2.vue',
        component: () => import('@/views/Credit_Card_Acquiring/3-2'),
        meta: { title: '信用卡帳戶設定', icon: '' }
      },
      {
        path: '3-3',
        name: '3-3.vue',
        component: () => import('@/views/Credit_Card_Acquiring/3-3'),
        meta: { title: '交易明細查詢', icon: '' }
      },
      {
        path: '3-4',
        name: '3-4.vue',
        component: () => import('@/views/Credit_Card_Acquiring/3-4'),
        meta: { title: '待請款列表查詢', icon: '' }
      },
      {
        path: '3-5',
        name: '3-5.vue',
        component: () => import('@/views/Credit_Card_Acquiring/3-5'),
        meta: { title: '已請款明細查詢', icon: '' }
      },
      {
        path: '3-6',
        name: '3-6.vue',
        component: () => import('@/views/Credit_Card_Acquiring/3-6'),
        meta: { title: '已清算待撥款明細查詢', icon: '' }
      },
      {
        path: '3-7',
        name: '3-7.vue',
        component: () => import('@/views/Credit_Card_Acquiring/3-7'),
        meta: { title: '已撥款明細查詢', icon: '' }
      },
      {
        path: '3-8',
        name: '3-8.vue',
        component: () => import('@/views/Credit_Card_Acquiring/3-8'),
        meta: { title: '請款失敗列表', icon: '' }
      },
      {
        path: '3-9',
        name: '3-9.vue',
        component: () => import('@/views/Credit_Card_Acquiring/3-9'),
        meta: { title: '拒絕交易卡號列表', icon: '' }
      },
      {
        path: '3-10',
        name: '3-10.vue',
        component: () => import('@/views/Credit_Card_Acquiring/3-10'),
        meta: { title: '退刷圈存查詢', icon: '' }
      }
    ]
  },

  {
    path: '/Chart',
    component: Layout,
    meta: {
      title: '全方位金流圖表分析',
      icon: 'el-icon-s-help'
    },
    children: [
      {
        path: '4-1',
        name: '4-1.vue',
        component: () => import('@/views/Chart/4-1'),
        meta: { title: '收款金額圖表分析(月報)', icon: '' }
      },
      {
        path: '4-2',
        name: '4-2.vue',
        component: () => import('@/views/Chart/4-1'),
        meta: { title: '收款筆數圖表分析(月報)', icon: '' }
      }
    ]
  },

  {
    path: '/Account',
    component: Layout,
    meta: {
      title: '金流帳戶管理',
      icon: 'el-icon-s-help'
    },
    children: [
      {
        path: '5-1',
        name: '5-1.vue',
        component: () => import('@/views/Account/5-1'),
        meta: { title: '帳戶總覽', icon: '' }
      },
      {
        path: '5-2',
        name: '5-2.vue',
        component: () => import('@/views/Account/5-2'),
        meta: { title: '帳務進出明細', icon: '' }
      },
      {
        path: '5-3',
        name: '5-3.vue',
        component: () => import('@/views/Account/5-3'),
        meta: { title: '保留款明細', icon: '' }
      },
      {
        path: '5-4',
        name: '5-4.vue',
        component: () => import('@/views/Account/5-4'),
        meta: { title: '預付款存入', icon: '' }
      },
      {
        path: '5-5',
        name: '5-5.vue',
        component: () => import('@/views/Account/5-5'),
        meta: { title: '提領紀錄查詢', icon: '' }
      },
      {
        path: '5-6',
        name: '5-6.vue',
        component: () => import('@/views/Account/5-6'),
        meta: { title: '銀行帳號查詢', icon: '' }
      },
      {
        path: '5-7',
        name: '5-7.vue',
        component: () => import('@/views/Account/5-7'),
        meta: { title: '手續費發票明細', icon: '' }
      }
    ]
  },

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
