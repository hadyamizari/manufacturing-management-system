// import { IconChevronDown } from '@tabler/icons-react';
// import {
//   Box,
//   Burger,
//   Button,
//   Center,
//   Container,
//   Drawer,
//   Group,
//   Header,
//   Menu,
//   rem,
//   ScrollArea,
//   Text,
// } from '@mantine/core';
// import { useDisclosure, useMediaQuery } from '@mantine/hooks';
// import { Logo } from '@/components';
// import { PATH_DASHBOARD, PATH_DOCS } from '@/routes';
// import useStyles from './HeaderNav.styles';

// const MOCK_DATA = [
//   {
//     link: PATH_DASHBOARD.root,
//     label: 'live preview',
//   },
//   {
//     link: PATH_DOCS.root,
//     label: 'documentation',
//   },
//   {
//     link: 'mailto:johndoe@gmail.com',
//     label: 'support',
//   },
// ];

// const HEADER_HEIGHT = rem(60);

// const HeaderNav = () => {
//   const { classes, theme } = useStyles();
//   const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
//   const tablet_match = useMediaQuery('(max-width: 768px)');

//   const items = MOCK_DATA.map((link) => {
//     return (
//       <a key={link.label} href={link.link} target="_blank" className={classes.link}>
//         {link.label}
//       </a>
//     );
//   });

//   return (
//     <Box>
//       <Header height={HEADER_HEIGHT}>
//         <Container className={classes.inner} fluid>
//           <Logo sx={{ color: theme.white }} />
//           <Group spacing="xs" className={classes.links}>
//             {items}
//             <Button>Purchase Now</Button>
//           </Group>
//           <Burger
//             opened={drawerOpened}
//             onClick={toggleDrawer}
//             className={classes.hiddenDesktop}
//             color={theme.white}
//           />
//         </Container>
//       </Header>
//       <Drawer
//         opened={drawerOpened}
//         onClose={closeDrawer}
//         size="100%"
//         padding="md"
//         title="Menu"
//         className={classes.hiddenDesktop}
//         zIndex={1000000}
//         transitionProps={{
//           transition: tablet_match ? 'slide-up' : 'slide-left',
//         }}
//       >
//         <ScrollArea h={`calc(100vh - ${rem(60)})`} mx="-md">
//           {items}
//         </ScrollArea>
//       </Drawer>
//     </Box>
//   );
// };

// export default HeaderNav;
