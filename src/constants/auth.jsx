import {
  DashboardOutlined,
  HomeOutlined,
  PieChartOutlined,
  SettingOutlined
} from '@ant-design/icons'

export const USER_AUTH = {
  user: 'user',
  vip: 'vip',
  admin: 'admin'
}
const FULL_AUTH = Object.values(USER_AUTH)

export const FULL_MENU_ITEMS = [
  {
    key: 'page1', // keep consistent with router
    label: 'Page1',
    title: 'Page1',
    icon: <HomeOutlined />,
    auth: FULL_AUTH
    // children: [
    //   {
    //     key: 'edit',
    //     label: 'PageEdit',
    //     title: 'PageEdit',
    //     icon: <DashboardOutlined />,
    //     auth: [USER_AUTH.vip, USER_AUTH.admin]
    //   }
    // ]
  },
  {
    key: 'page2',
    label: 'Page2',
    title: 'Page2',
    icon: <PieChartOutlined />,
    auth: [USER_AUTH.vip, USER_AUTH.admin]
  },
  {
    key: 'page3',
    label: 'Page3',
    title: 'Page3',
    icon: <SettingOutlined />,
    auth: [USER_AUTH.admin]
  }
]
