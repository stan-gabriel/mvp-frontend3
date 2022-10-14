import { IconVariant } from '../assets/icons/Icon'

export type IMenuItem = {
  to: string
  title: string
  icon: IconVariant
}

export const menuItems: IMenuItem[] = [
  { to: '/', title: 'Dashboard', icon: 'dashboard' },
  { to: '/apps', title: 'Apps', icon: 'apps' },
  { to: '/monitor', title: 'Monitor', icon: 'monitor' },
  { to: '/reports', title: 'Reports', icon: 'reports' },
  { to: '/sign-out', title: 'Sign Out', icon: 'logOut' },
]
