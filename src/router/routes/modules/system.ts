import { DEFAULT_LAYOUT } from '../base'
import { AppRouteRecordRaw } from '../types'

const FORM: AppRouteRecordRaw = {
  path: '/system',
  name: 'system',
  component: DEFAULT_LAYOUT,
  meta: {
    locale: 'menu.system',
    icon: 'icon-settings',
    requiresAuth: true,
    order: 10,
  },
  children: [
    {
      path: 'muser',
      name: 'muser',
      component: () => import('@/views/system/muser/index.vue'),
      meta: {
        locale: 'menu.system.mUser',
        requiresAuth: true,
        roles: ['admin'],
      },
    },
    {
      path: 'department',
      name: 'department',
      component: () => import('@/views/system/department/index.vue'),
      meta: {
        locale: 'menu.system.department',
        requiresAuth: true,
        roles: ['admin'],
      },
    },
  ],
}

export default FORM
