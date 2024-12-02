import { Suspense } from 'react'
import { Link, Outlet } from 'react-router-dom'

import BreadCrumbs from '@/components/BreadCrumbs'
import Loading from '@/components/Loading'

import './index.css'

export default function RootLayout() {
  return (
    <div className='container'>
      <ul className='sidebar'>
        <li className='sidebar-li'>
          <Link to={'/page1'}>page1</Link>
        </li>
        <li className='sidebar-li'>
          <Link to={'/page2'}>page2</Link>
        </li>
        <li className='sidebar-li'>
          <Link to={'/page3'}>page3</Link>
        </li>
      </ul>
      <main className='main'>
        <BreadCrumbs />
        <Suspense fallback={<Loading />}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  )
}
