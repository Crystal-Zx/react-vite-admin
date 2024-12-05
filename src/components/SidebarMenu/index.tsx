import { useLocation, useNavigate } from 'react-router-dom'

import { Menu, MenuProps } from 'antd'

import { useAuthMenuItems } from '@/stores/auth'

export default function SidebarMenu() {
  const menuItems = useAuthMenuItems()
  console.log('🚀 ~ SidebarMenu ~ menuItems:', menuItems)

  const { pathname } = useLocation()
  const defaultSelectedKeys = pathname.split('/').filter(v => v !== '')
  console.log('🚀 ~ SidebarMenu ~ pathname:', pathname, defaultSelectedKeys)

  const handleMenuClick: MenuProps['onClick'] = ({ key, keyPath }) => {
    // let href = keyPath.reverse().join('/')
    // href = href.replace(/\/+/g, '/')
    // navigate(href)

    console.log('🚀 ~ handleMenuClick:', key, keyPath)
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
