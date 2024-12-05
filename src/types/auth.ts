import type { MenuProps } from 'antd'

export enum UserAuth {
  user = 'user',
  vip = 'vip',
  admin = 'admin'
}

type AddProps<T, K> = T extends infer U ? U & K : never
type AntdMenuItem = Required<MenuProps>['items'][number]
export type AuthMenuItem = AddProps<
  Exclude<AntdMenuItem, null>,
  { auth: UserAuth[]; children?: AuthMenuItem[] }
>

export interface AuthStoreActions {
  initMenuItems: (userAuth: UserAuth) => void
}
export interface AuthStoreState {
  menuItems: AuthMenuItem[]
  actions: AuthStoreActions
}
