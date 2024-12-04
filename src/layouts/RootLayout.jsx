import { Suspense, useEffect } from 'react'
import { Outlet } from 'react-router-dom'

import BreadCrumbs from '@/components/BreadCrumbs'
import Loading from '@/components/Loading'
import SidebarMenu from '@/components/SidebarMenu'
import { USER_AUTH } from '@/constants/auth'
import { useAuthActions } from '@/stores/auth'

import './index.css'

export default function RootLayout() {
  // TEST: use this after login completed
  const { initMenuItems } = useAuthActions()
  useEffect(() => {
    initMenuItems(USER_AUTH.admin)
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
