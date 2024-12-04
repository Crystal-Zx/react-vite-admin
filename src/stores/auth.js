import { create } from 'zustand'

import { FULL_MENU_ITEMS } from '@/constants/auth'

/** Utils */
function filterMenuItems(menuItems, auth) {
  return menuItems.filter(item => {
    if (item.auth.includes(auth)) {
      if (item.children) {
        item.children = filterMenuItems(item.children, auth)
        !item.children.length && delete item.children
      }

      return true
    }
    return false
  })
}

/** Store */
const initState = {
  menuItems: []
}
const useAuthStore = create((set, get, store) => ({
  ...initState,
  actions: {
    initMenuItems: userAuth => {
      set({ menuItems: filterMenuItems(FULL_MENU_ITEMS, userAuth) })
    }
  }
}))

/** Hooks */
export const useAuthActions = () => useAuthStore(state => state.actions)
export const useAuthMenuItems = () => useAuthStore(state => state.menuItems)
