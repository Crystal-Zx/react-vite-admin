import { create } from 'zustand'

import { FULL_MENU_ITEMS } from '@/constants/menu'
import { AuthMenuItem, AuthStoreState, UserAuth } from '@/types/auth'

/** Utils */
function filterMenuItems(menuItems: AuthMenuItem[], userAuth: UserAuth) {
  return menuItems.filter(item => {
    if (item.auth.includes(userAuth)) {
      if (item?.children) {
        item.children = filterMenuItems(item.children, userAuth)
        if (!item.children.length) delete item.children
      }

      return true
    }
    return false
  })
}

/** Store */
const initState: Omit<AuthStoreState, 'actions'> = {
  menuItems: []
}
const useAuthStore = create<AuthStoreState>()(set => ({
  ...initState,
  actions: {
    initMenuItems: (userAuth: UserAuth) => {
      set({ menuItems: filterMenuItems(FULL_MENU_ITEMS, userAuth) })
    }
  }
}))

/** Hooks */
export const useAuthActions = () => useAuthStore(state => state.actions)
export const useAuthMenuItems = () => useAuthStore(state => state.menuItems)
