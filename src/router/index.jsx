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
        }
      }
    ]
  },
  {
    path: '*',
    element: <NotFound />
  }
])
