import { useLocation, useNavigate } from 'react-router-dom'

import { Menu } from 'antd'

import { useAuthMenuItems } from '@/stores/auth'

export default function SidebarMenu() {
  const menuItems = useAuthMenuItems()
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const defaultSelectedKeys = pathname.split('/').filter(v => v !== '')
  console.log('🚀 ~ SidebarMenu ~ pathname:', pathname, defaultSelectedKeys)

  const handleMenuClick = ({ item, key, keyPath, domEvent }) => {
    const href = keyPath.reverse().join('/')
    navigate(href)

    console.log('🚀 ~ handleMenuClick:', key, keyPath, href)
  }
  return (
    <Menu
      className='sidebar'
      items={menuItems}
      onClick={handleMenuClick}
      defaultSelectedKeys={defaultSelectedKeys}
    />
  )
}
