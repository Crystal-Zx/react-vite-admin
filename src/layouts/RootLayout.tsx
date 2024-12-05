import { Suspense, useEffect } from 'react'
import { Outlet } from 'react-router-dom'

import BreadCrumbs from '@/components/BreadCrumbs'
import Loading from '@/components/Loading'
import SidebarMenu from '@/components/SidebarMenu'
import { useAuthActions } from '@/stores/auth'
import { UserAuth } from '@/types/auth'

import './index.css'

export default function RootLayout() {
  console.log('🚀 ~ RootLayout render')
  // TEST: use this after login completed
  const { initMenuItems } = useAuthActions()
  useEffect(() => {
    console.log('initMenuItems execute')
    initMenuItems(UserAuth.vip)
  }, [initMenuItems])

  return (
    <div className='container'>
      <SidebarMenu />
      <main className='main'>
        <BreadCrumbs />
        <Suspense fallback={<Loading />}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  )
}
