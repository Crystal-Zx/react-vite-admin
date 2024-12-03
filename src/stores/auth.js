import {
  HomeOutlined,
  PieChartOutlined,
  SettingOutlined
} from '@ant-design/icons'
import { create } from 'zustand'

export const USER_AUTH = {
  user: 'user',
  vip: 'vip',
  admin: 'admin'
}
const FULL_AUTH = Object.values(USER_AUTH)
const fullMenuItems = [
  {
    key: 'item1',
    label: '首页',
    title: '首页',
    icon: <HomeOutlined />,
    auth: FULL_AUTH
  },
  {
    key: 'item2',
    label: '分析',
    title: '分析',
    icon: <PieChartOutlined />,
    auth: [USER_AUTH.vip, USER_AUTH.admin]
  },
  {
    key: 'item3',
    label: '配置',
    title: '配置',
    icon: <SettingOutlined />,
    auth: [USER_AUTH.admin]
  }
]

const initState = {}
const useAuthStore = create((set, get, store) => ({
  ...initState,
  actions: {
    initMenuItemWithAuth: userAuth => {
      const authMenuItems = []
      fullMenuItems.forEach(item => {
        dfs(item, authMenuItems)
      })
      return authMenuItems
      function dfs(item, parentItem) {
        if (item.auth.includes(userAuth)) {
          // TODO:
        }
      }
    }
  }
}))
