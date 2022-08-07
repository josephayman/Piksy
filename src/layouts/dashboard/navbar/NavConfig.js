// routes
import { PATH_DASHBOARD } from '../../../routes/paths';
// components
/* import Label from '../../../components/Label'; HEHE TIHI
import Iconify from '../../../components/Iconify'; */
import SvgIconStyle from '../../../components/SvgIconStyle';

// ----------------------------------------------------------------------

const getIcon = (name) => <SvgIconStyle src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />;

const ICONS = {
  blog: getIcon('ic_blog'),
  cart: getIcon('ic_cart'),
  chat: getIcon('ic_chat'),
  mail: getIcon('ic_mail'),
  user: getIcon('ic_user'),
  kanban: getIcon('ic_kanban'),
  banking: getIcon('ic_banking'),
  booking: getIcon('ic_booking'),
  invoice: getIcon('ic_invoice'),
  calendar: getIcon('ic_calendar'),
  ecommerce: getIcon('ic_ecommerce'),
  analytics: getIcon('ic_analytics'),
  dashboard: getIcon('ic_dashboard'),
  menuItem: getIcon('ic_menu_item'),
};

const navConfig = [
  // GENERAL
  // ----------------------------------------------------------------------
  {
    subheader: 'general',
    items: [
      // { title: 'app', path: PATH_DASHBOARD.general.app, icon: ICONS.dashboard },
      // { title: 'ecommerce', path: PATH_DASHBOARD.general.ecommerce, icon: ICONS.ecommerce },
      { title: 'analytics', path: PATH_DASHBOARD.general.analytics, icon: ICONS.analytics },
      { title: 'booking', path: PATH_DASHBOARD.general.booking, icon: ICONS.booking },
    ],
  },

  // MANAGEMENT
  // ----------------------------------------------------------------------
  {
    subheader: 'management',
    items: [
      // USER
      {
        title: 'Employees', // USER
        path: PATH_DASHBOARD.user.list,
        icon: ICONS.user,
      },
      {
        title: 'Services',
         path: PATH_DASHBOARD.service.list,
        icon: ICONS.user,
      },

    ],
  },
  
  // APP
  // ----------------------------------------------------------------------
  {
    subheader: 'app',
    items: [
      /* {
        title: 'mail',
        path: PATH_DASHBOARD.mail.root,
        icon: ICONS.mail,
        info: <Label color="error">+32</Label>,
      }, */
      // { title: 'chat', path: PATH_DASHBOARD.chat.root, icon: ICONS.chat },
      { title: 'calendar', path: PATH_DASHBOARD.calendar, icon: ICONS.calendar },
    ],
  },

  // DEMO MENU STATES
  /* {
    subheader: 'Other cases',
    items: [
      {
        // default roles : All roles can see this entry.
        // roles: ['user'] Only users can see this item.
        // roles: ['admin'] Only admin can see this item.
        // roles: ['admin', 'manager'] Only admin/manager can see this item.
        // Reference from 'src/guards/RoleBasedGuard'.
        title: 'item_by_roles',
        path: PATH_DASHBOARD.permissionDenied,
        icon: ICONS.menuItem,
        roles: ['admin'],
        caption: 'only_admin_can_see_this_item',
      },
      {
        title: 'menu_level_1',
        path: '#/dashboard/menu_level_1',
        icon: ICONS.menuItem,
        children: [
          { title: 'menu_level_2a', path: '#/dashboard/menu_level_1/menu_level_2a' },
          {
            title: 'menu_level_2b',
            path: '#/dashboard/menu_level_1/menu_level_2b',
            children: [
              {
                title: 'menu_level_3a',
                path: '#/dashboard/menu_level_1/menu_level_2b/menu_level_3a',
              },
              {
                title: 'menu_level_3b',
                path: '#/dashboard/menu_level_1/menu_level_2b/menu_level_3b',
                children: [
                  {
                    title: 'menu_level_4a',
                    path: '#/dashboard/menu_level_1/menu_level_2b/menu_level_3b/menu_level_4a',
                  },
                  {
                    title: 'menu_level_4b',
                    path: '#/dashboard/menu_level_1/menu_level_2b/menu_level_3b/menu_level_4b',
                  },
                ],
              },
            ],
          },
        ],
      },
      { title: 'item_disabled', path: '#disabled', icon: ICONS.menuItem, disabled: true },
      {
        title: 'item_label',
        path: '#label',
        icon: ICONS.menuItem,
        info: (
          <Label color="info" startIcon={<Iconify icon="eva:email-fill" />}>
            NEW
          </Label>
        ),
      },
      {
        title: 'item_caption',
        path: '#caption',
        icon: ICONS.menuItem,
        caption:
          'Quisque malesuada placerat nisl. In hac habitasse platea dictumst. Cras id dui. Pellentesque commodo eros a enim. Morbi mollis tellus ac sapien.',
      },
      { title: 'item_external_link', path: 'https://www.google.com/', icon: ICONS.menuItem },
    ],
  }, */
];



export default navConfig;
