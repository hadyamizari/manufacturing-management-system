'use client';

import { useState } from 'react';
import {
  IconAlertCircle,
  IconBuildingWarehouse,
  IconHeadset,
  IconMessageUser,
  IconNotebook,
  IconNut,
  IconTool,
  IconUsers,
  IconUsersGroup,
} from '@tabler/icons-react';
import { Code, Group } from '@mantine/core';
import { PATH_ASSETS } from '@/routes';
import classes from './Navbar.module.css';

const data = [
  { link: PATH_ASSETS.root, label: 'Assets', icon: IconNut },
  { link: '', label: 'Item Inventory', icon: IconBuildingWarehouse },
  { link: '', label: 'Customers', icon: IconMessageUser },
  { link: '', label: 'Issues', icon: IconAlertCircle },
  { link: '', label: 'Mantenance Types', icon: IconTool },
  { link: '', label: 'Suppliers', icon: IconHeadset },
  { link: '', label: 'Users', icon: IconUsers },
  { link: '', label: 'Teams', icon: IconUsersGroup },
  { link: '', label: 'Work Orders', icon: IconNotebook },
];

export function NavbarSimple() {
  const [active, setActive] = useState('Assets');

  const links = data.map((item) => (
    <a
      className={classes.link}
      data-active={item.label === active || undefined}
      href={item.link}
      key={item.label}
      onClick={(event) => {
        event.preventDefault();
        setActive(item.label);
      }}
    >
      <item.icon className={classes.linkIcon} stroke={1.5} />
      <span>{item.label}</span>
    </a>
  ));

  return (
    <nav className={classes.navbar}>
      <div className={classes.navbarMain}>
        <Group className={classes.header}>
          <Code fw={700}>Manufacturing Management System</Code>
        </Group>
        {links}
      </div>

      {/* <div className={classes.footer}>
        <a href="#" className={classes.link} onClick={(event) => event.preventDefault()}>
          <IconSwitchHorizontal className={classes.linkIcon} stroke={1.5} />
          <span>Change account</span>
        </a>

        <a href="#" className={classes.link} onClick={(event) => event.preventDefault()}>
          <IconLogout className={classes.linkIcon} stroke={1.5} />
          <span>Logout</span>
        </a>
      </div> */}
    </nav>
  );
}
