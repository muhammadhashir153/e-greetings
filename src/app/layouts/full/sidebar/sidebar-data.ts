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
    roles: ['user'],
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
    roles: ['admin', 'user'],
  },
  {
    displayName: 'Templates',
    iconName: 'solar:file-smile-line-duotone',
    route: '/admin/templates',
    roles: ['admin', 'user'],
  },
  {
    displayName: 'Feedbacks',
    iconName: 'solar:chat-dots-broken',
    route: '/admin/feedbacks',
    roles: ['admin', 'user'],
  },
  {
    navCap: 'Ui Components',
    divider: true
  },
  {
    displayName: 'Badge',
    iconName: 'solar:archive-minimalistic-line-duotone',
    route: '/ui-components/badge',
    roles: ['admin', 'user'],
  },
  {
    displayName: 'Chips',
    iconName: 'solar:danger-circle-line-duotone',
    route: '/ui-components/chips',
    roles: ['admin', 'user'],
  },
  {
    displayName: 'Lists',
    iconName: 'solar:bookmark-square-minimalistic-line-duotone',
    route: '/ui-components/lists',
    roles: ['admin', 'user'],
  },
  {
    displayName: 'Menu',
    iconName: 'solar:file-text-line-duotone',
    route: '/ui-components/menu',
    roles: ['admin', 'user'],
  },
  {
    displayName: 'Tooltips',
    iconName: 'solar:text-field-focus-line-duotone',
    route: '/ui-components/tooltips',
    roles: ['admin', 'user'],
  },
  {
    displayName: 'Forms',
    iconName: 'solar:file-text-line-duotone',
    route: '/ui-components/forms',
    roles: ['admin', 'user'],
  },
  {
    displayName: 'Tables',
    iconName: 'solar:tablet-line-duotone',
    route: '/ui-components/tables',
    roles: ['admin', 'user'],
  },
  {
    navCap: 'Auth',
    divider: true
  },
  {
    displayName: 'Login',
    iconName: 'solar:login-3-line-duotone',
    route: '/authentication/login',
    roles: ['admin', 'user'],
  },
  {
    displayName: 'Register',
    iconName: 'solar:user-plus-rounded-line-duotone',
    route: '/authentication/register',
    roles: ['admin', 'user'],
  },
  {
    navCap: 'Extra',
    divider: true
  },
  {
    displayName: 'Icons',
    iconName: 'solar:sticker-smile-circle-2-line-duotone',
    route: '/extra/icons',
    roles: ['admin', 'user'],
  },
  {
    displayName: 'Sample Page',
    iconName: 'solar:planet-3-line-duotone',
    route: '/extra/sample-page',
    roles: ['admin', 'user'],
  },
];
