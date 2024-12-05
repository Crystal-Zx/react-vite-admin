import { lazy } from 'react'
import { createBrowserRouter } from 'react-router-dom'

import RootLayout from '@/layouts/RootLayout'
import NotFound from '@/pages/NotFound'

export type RouteHandle = {
  meta?: {
    title: string
  }
  crumb: () => React.ReactNode
}
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
      },
      {
        path: 'page1/edit',
        Component: lazy(() => import('@/pages/page1/PageEdit')),
        handle: {
          meta: {
            title: 'Welcome to Page3 Edit'
          },
          crumb: () => 'Edit'
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
        },
        children: [
          {
            path: 'detail',
            Component: lazy(() => import('@/pages/page2/PageDetail')),
            handle: {
              meta: {
                title: 'Page Detail'
              },
              crumb: () => 'Detail'
            }
          }
        ]
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
      },
      {
        path: 'page4',
        Component: lazy(() => import('@/pages/page4')),
        handle: {
          meta: {
            title: 'Welcome to Page4'
          },
          crumb: () => 'Page4'
        }
      }
    ]
  },
  {
    path: '*',
    element: <NotFound />
  }
])
