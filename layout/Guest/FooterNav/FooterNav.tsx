// import {
//     ActionIcon, ActionIconProps,
//     Button,
//     Container,
//     Divider,
//     Flex,
//     Group, Stack,
//     Text,
//     Title
// } from '@mantine/core';
// import useStyles from "./FooterNav.styles";
// import {Logo} from "@/components";
// import {
//     IconBrandFacebook,
//     IconBrandGithub,
//     IconBrandInstagram,
//     IconBrandLinkedin,
//     IconBrandTwitter,
//     IconWorld
// } from "@tabler/icons-react";
// import {useMediaQuery} from "@mantine/hooks";
// import {PATH_DOCS} from "@/routes";

// const ICON_SIZE = 18

// const ACTION_ICON_PROPS: ActionIconProps = {
//     size: "lg",
//     color: "blue.3",
//     variant: "transparent"
// }

// const FooterNav = () => {
//     const {classes, theme} = useStyles();
//     const mobile_match = useMediaQuery('(max-width: 425px)');

//     return (
//         <footer className={classes.footer}>
//             <Container mb="xl">
//                 <Stack spacing="lg">
//                     <Title ta="center" order={2}>Start using taskify today</Title>
//                     <Text ta="center">Stop wasting time with manual follow ups.</Text>
//                     <Group position="center">
//                         <Button size="md" component="a" target="_blank" href={PATH_DOCS.root}>Read Documentation</Button>
//                         <Button size="md">Get Started</Button>
//                     </Group>
//                 </Stack>
//             </Container>
//             <Divider mt="xl" mb="md"/>
//             <Flex
//                 direction={{base: 'column', sm: 'row'}}
//                 gap={{base: 'sm', sm: 'lg'}}
//                 justify={{base: 'center', sm: 'space-between'}}
//                 align={{base: 'center'}}
//             >
//                 <Logo sx={{color: theme.white}}/>
//                 <Group spacing="xs" position="right" noWrap>
//                     <ActionIcon
//                         component="a"
//                         href="https://google.com"
//                         target="_blank"
//                         {...ACTION_ICON_PROPS}
//                     >
//                         <IconWorld size={ICON_SIZE}/>
//                     </ActionIcon>
//                     <ActionIcon
//                         size="lg"
//                         component="a"
//                         href="https://github.com/johndoe"
//                         target="_blank"
//                         {...ACTION_ICON_PROPS}
//                     >
//                         <IconBrandGithub size={ICON_SIZE}/>
//                     </ActionIcon>
//                     <ActionIcon
//                         size="lg"
//                         component="a"
//                         href="https://twitter.com/johndoe"
//                         target="_blank"
//                         {...ACTION_ICON_PROPS}
//                     >
//                         <IconBrandTwitter size={ICON_SIZE}/>
//                     </ActionIcon>
//                     <ActionIcon
//                         size="lg"
//                         component="a"
//                         href="https://www.linkedin.com/in/johndoe/"
//                         target="_blank"
//                         {...ACTION_ICON_PROPS}
//                     >
//                         <IconBrandLinkedin size={ICON_SIZE}/>
//                     </ActionIcon>
//                     <ActionIcon
//                         size="lg"
//                         component="a"
//                         href="https://www.facebook.com/johndoe"
//                         target="_blank"
//                         {...ACTION_ICON_PROPS}
//                     >
//                         <IconBrandFacebook size={ICON_SIZE}/>
//                     </ActionIcon>
//                     <ActionIcon
//                         size="lg"
//                         component="a"
//                         href="https://www.instagram.com/johndoe/"
//                         target="_blank"
//                         {...ACTION_ICON_PROPS}
//                     >
//                         <IconBrandInstagram size={ICON_SIZE}/>
//                     </ActionIcon>
//                 </Group>
//             </Flex>
//         </footer>
//     );
// }

// export default FooterNav
