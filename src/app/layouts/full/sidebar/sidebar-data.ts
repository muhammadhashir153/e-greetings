import { NavItem } from './nav-item/nav-item';

export const navItems: NavItem[] = [
  {
    navCap: 'Home',
    roles: ['admin'],
  },
  {
    displayName: 'Dashboard',
    iconName: 'solar:widget-add-line-duotone',
    route: '/dashboard',
    roles: ['admin'],
  },
  {
    displayName: 'Editor',
    iconName: 'solar:pen-new-round-outline',
    route: '/editor',
    roles: [],
  },
  {
    navCap: 'Create',
    divider: true,
    roles: ['admin']
  },
  {
    displayName: 'Categories',
    iconName: 'solar:folder-path-connect-line-duotone',
    route: '/admin/categories',
    roles: ['admin'],
  },
  {
    displayName: 'Templates',
    iconName: 'solar:file-smile-line-duotone',
    route: '/admin/templates',
    roles: ['admin'],
  },
  {
    displayName: 'Feedbacks',
    iconName: 'solar:chat-dots-broken',
    route: '/admin/feedbacks',
    roles: ['admin'],
  },
  {
    displayName: 'Profile',
    iconName: 'solar:chat-dots-broken',
    route: '/profile',
    roles: ['admin', 'user'],
  },
  
];
