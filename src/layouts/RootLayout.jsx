import { Suspense } from 'react'
import { Link, Outlet } from 'react-router-dom'

import BreadCrumbs from '@/components/BreadCrumbs'
import Loading from '@/components/Loading'
import Menu from '@/components/Menu'

import './index.css'

export default function RootLayout() {
  return (
    <div className='container'>
      <Menu />
      <main className='main'>
        <BreadCrumbs />
        <Suspense fallback={<Loading />}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  )
}
