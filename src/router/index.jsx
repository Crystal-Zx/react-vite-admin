import { lazy } from 'react'
import { createBrowserRouter } from 'react-router-dom'

import RootLayout from '@/layouts/RootLayout'
import NotFound from '@/pages/NotFound'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <h2>Something went wrong</h2>,
    handle: {
      crumb: () => 'Home'
    },
    children: [
      {
        path: 'page1',
        Component: lazy(() => import('@/pages/page1')),
        handle: {
          meta: {
            title: 'Welcome to Page One'
          },
          crumb: () => 'Page One'
          // menu: {
          //   icon: <HomeOutlined />,
          //   label: 'Page 1',
          //   title: 'Page 1'
          // }
        }
        // children: [
        //   {
        //     path: 'edit',
        //     element: <PageOneEdit />,
        //     handle: {
        //       meta: {
        //         title: 'Welcome to Page One Edit'
        //       },
        //       crumb: () => 'Edit'
        //     }
        //   }
        // ]
      },
      {
        path: 'page1/edit',
        Component: lazy(() => import('@/pages/page1/PageOneEdit')),
        handle: {
          meta: {
            title: 'Welcome to Page One Edit'
          },
          crumb: () => 'Edit'
        }
      },
      {
        path: 'page2',
        Component: lazy(() => import('@/pages/page2')),
        handle: {
          meta: {
            title: 'Welcome to Page Two'
          },
          crumb: () => 'Page Two'
          // menu: {
          //   icon: <PieChartOutlined />,
          //   title: 'Page 2'
          // }
        }
      },
      {
        path: 'page3',
        Component: lazy(() => import('@/pages/page3')),
        handle: {
          meta: {
            title: 'Welcome to Page Three'
          },
          crumb: () => 'Page Three'
          // menu: {
          //   icon: <SettingOutlined />,
          //   title: 'Page 3'
          // }
        }
      }
    ]
  },
  {
    path: '*',
    element: <NotFound />
  }
])
