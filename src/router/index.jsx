import { lazy } from 'react'
import { createBrowserRouter } from 'react-router-dom'

import RootLayout from '@/layouts/RootLayout'
import NotFound from '@/pages/NotFound'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <h2>Something went wrong</h2>,
    children: [
      {
        path: 'page1',
        Component: lazy(() => import('@/pages/page1')),
        handle: {
          meta: {
            title: 'Welcome to Page1'
          },
          crumb: () => 'Page1'
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
        Component: lazy(() => import('@/pages/page1/PageEdit')),
        handle: {
          meta: {
            title: 'Welcome to Page3 Edit'
          },
          crumb: () => 'Page3'
        }
      },
      {
        path: 'page2',
        Component: lazy(() => import('@/pages/page2')),
        handle: {
          meta: {
            title: 'Welcome to Page2'
          },
          crumb: () => 'Page2'
        }
      },
      {
        path: 'page3',
        Component: lazy(() => import('@/pages/page3')),
        handle: {
          meta: {
            title: 'Welcome to Page3'
          },
          crumb: () => 'Page3'
        }
      }
    ]
  },
  {
    path: '*',
    element: <NotFound />
  }
])
