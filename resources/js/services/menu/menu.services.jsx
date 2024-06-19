import DashboardIcon from '@mui/icons-material/Dashboard';
import HomeIcon from '@mui/icons-material/Home';

export const menuData = [
  {
    id: 1,
    main_menu : "Page",
    sub_menu : [
      {
        id: 1,
        name: "Dashboard",
        icon: <DashboardIcon />,
        link: "/dashboard",
      },
      {
        id: 2,
        name: "HomePage",
        icon: <HomeIcon />,
        link: "/dashboard",
        menu_list: [
          {
            id:1,
            list_name: "create",
          },
          {
            id:2,
            list_name: "edit",
          },
          {
            id:3,
            list_name: "delete",
          },
        ]
      },
    ]
  },
  {
    id: 2,
    main_menu : "Content",
    sub_menu : [
      {
        id: 2,
        name: "ManageContent",
        icon: <DashboardIcon />,
        link: "/backoffice/page"
      }
    ]
  },
  {
    id: 3,
    main_menu : "Menu",
  },
]