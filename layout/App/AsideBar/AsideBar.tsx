// import {Button, Card, Container, Group, Text} from '@mantine/core'
// import React from 'react'
// import {RingProgress} from '@mantine/core'
// import {IconCoffee, IconDotsVertical} from '@tabler/icons-react'

// const AsideBar = () => {
//   return (
//     <Container
//       p={5}
//       mt={65}
//       bg={'rgba(0,0,0,0.05)'}
//       style={{
//         zIndex: 100,
//         width: 290,
//         height: 1700,
//         borderWidth: 1,
//         borderColor: 'black',
//       }}
//     >
//       <Card my={10} bg={'blue'} pb={3} c={'white'} radius='md' shadow='xl'>
//         <IconDotsVertical
//           size={18}
//           style={{position: 'absolute', right: 15, top: 20}}
//         />
//         <Container>
//           <Container bg={'blue'} style={{height: 130}}>
//             <RingProgress
//               style={{position: 'absolute', rotate: '-90deg'}}
//               ml={-23}
//               size={230}
//               thickness={7}
//               roundCaps
//               rootColor='none'
//               sections={[{value: 50, color: 'rgba(0,0,0,0.15)'}]}
//             />
//             <RingProgress
//               style={{position: 'absolute', rotate: '-90deg'}}
//               ml={-23}
//               size={230}
//               thickness={7}
//               roundCaps
//               rootColor='none'
//               sections={[{value: 20, color: 'white'}]}
//             />
//           </Container>

//           <Group position='apart' mx={-3} mb={40}>
//             <Text fz={11} fw={'500'} c={'white'}>
//               8 am
//             </Text>
//             <Text fz={11} fw={'500'} c={'white'}>
//               5 pm
//             </Text>
//           </Group>
//         </Container>

//         <Container>
//           <Container bg={'blue'} style={{height: 60}}>
//             <RingProgress
//               style={{position: 'absolute', rotate: '-90deg'}}
//               ml={40}
//               mt={-125}
//               size={100}
//               thickness={7}
//               roundCaps
//               rootColor='none'
//               sections={[{value: 50, color: 'rgba(0,0,0,0.15)'}]}
//             />
//             <RingProgress
//               style={{position: 'absolute', rotate: '-90deg'}}
//               ml={40}
//               mt={-125}
//               size={100}
//               thickness={7}
//               roundCaps
//               rootColor='none'
//               sections={[{value: 10, color: 'dimmed'}]}
//             />
//           </Container>
//           <Group position='apart' mx={60} mt={-115}>
//             <Text fz={10} fw={'500'} c={'white'}>
//               0:00
//             </Text>
//             <Text fz={10} fw={'500'} c={'white'}>
//               0:00
//             </Text>
//           </Group>
//         </Container>

//         <Button radius={7} ml={60} mb={20} bg={'rgba(0,0,0,0.15)'}>
//           <IconCoffee color='white' size={20} strokeWidth={2} />
//           <Text fw={600} fz={'xs'} mb={-3} mx={6} c={'white'}>
//             Take break
//           </Text>
//         </Button>
//       </Card>

//       <Card my={15} bg={'white'} radius='md' shadow='xl'>
//         <Group position='apart' mb={20}>
//           <Text fz={'md'} fw={'600'} c={'blue'}>
//             Announcements
//           </Text>
//           <IconDotsVertical
//             size={16}
//             color='blue'
//             style={{position: 'absolute', right: 15, top: 20}}
//           />
//         </Group>

//         <Card py={10} my={7} fz={'xs'} bg={'rgba(0,0,0,0.05)'} radius='md'>
//           Upcoming Training Sessions
//         </Card>
//         <Card py={10} my={7} fz={'xs'} bg={'rgba(0,0,0,0.05)'} radius='md'>
//           Holiday Office Closure
//         </Card>
//         <Card py={10} my={7} fz={'xs'} bg={'rgba(0,0,0,0.05)'} radius='md'>
//           Payroll Processing Delayed
//         </Card>
//       </Card>
//     </Container>
//   )
// }

// export default AsideBar

// {
//   /* <Group position='apart'>
//         <Text fz={'lg'} fw={'700'} c={'blue'} mt={10}>
//           Thursday, 26 October
//         </Text>
//       </Group>

//       <Card my={10} bg={'blue'} pb={3} c={'white'} radius='md' shadow='xl'>
//         <IconDotsVertical
//           size={18}
//           style={{position: 'absolute', right: 15, top: 20}}
//         />
//         <Container>
//           <Container bg={'blue'} style={{height: 130}}>
//             <RingProgress
//               style={{position: 'absolute', rotate: '-90deg'}}
//               ml={-23}
//               size={230}
//               thickness={7}
//               roundCaps
//               rootColor='none'
//               sections={[{value: 50, color: 'rgba(0,0,0,0.15)'}]}
//             />
//             <RingProgress
//               style={{position: 'absolute', rotate: '-90deg'}}
//               ml={-23}
//               size={230}
//               thickness={7}
//               roundCaps
//               rootColor='none'
//               sections={[{value: 20, color: 'white'}]}
//             />
//           </Container>

//           <Container mt={-70} ml={45}>
//             <Text c={'white'} fw={'300'} fz={'sm'}>
//               Ended break at
//             </Text>
//             <Group dir='row'>
//               <Text c={'white'} fw={'600'} fz={30}>
//                 12:01
//               </Text>
//               <Text mb={-13} ml={-10} fw={'300'} c={'white'} fz={'md'}>
//                 pm
//               </Text>
//             </Group>
//           </Container>

//           <Group position='apart' mx={-3} mb={40}>
//             <Text fz={11} fw={'500'} c={'white'}>
//               8 am
//             </Text>
//             <Text fz={11} fw={'500'} c={'white'}>
//               5 pm
//             </Text>
//           </Group>
//         </Container>

//         <Button radius={7} ml={60} mb={20} bg={'rgba(0,0,0,0.15)'}>
//           <IconCoffee color='white' size={20} strokeWidth={2} />
//           <Text fw={600} fz={'xs'} mb={-3} mx={6} c={'white'}>
//             Take break
//           </Text>
//         </Button>
//       </Card> */
// }
