import { Link } from 'react-router-dom'

import {
  // DashboardOutlined,
  HomeOutlined,
  PieChartOutlined,
  SettingOutlined
} from '@ant-design/icons'

import { AuthMenuItem, UserAuth } from '@/types/auth'

const FULL_AUTH = Object.values(UserAuth)

export const FULL_MENU_ITEMS: AuthMenuItem[] = [
  {
    key: 'page1', // keep consistent with router
    label: <Link to='/page1'>并行子路由</Link>,
    icon: <HomeOutlined />,
    auth: FULL_AUTH
    // children: [
    //   {
    //     key: 'detail',
    //     label: 'PageEdit',
    //     title: 'PageEdit',
    //     icon: <DashboardOutlined />,
    //     auth: [UserAuth.vip, UserAuth.admin]
    //   }
    // ]
  },
  {
    key: 'page2',
    label: <Link to='/page2'>内嵌子路由</Link>,
    icon: <PieChartOutlined />,
    auth: [UserAuth.vip, UserAuth.admin]
  },
  {
    key: 'page3',
    label: '展开菜单',
    icon: <SettingOutlined />,
    auth: FULL_AUTH,
    children: [
      {
        key: 'page3',
        label: <Link to='/page3'>Page3</Link>,
        auth: [UserAuth.vip, UserAuth.admin]
      },
      {
        key: 'page4',
        label: <Link to='/page4'>Page4</Link>,
        auth: [UserAuth.admin]
      }
    ]
  }
]
