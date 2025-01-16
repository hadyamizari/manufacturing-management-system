import React from 'react';
import { IconRefresh } from '@tabler/icons-react';
import {
  ActionIcon,
  Breadcrumbs,
  BreadcrumbsProps,
  Divider,
  Flex,
  Paper,
  Stack,
  Text,
  Title,
} from '@mantine/core';

type PageHeaderProps = {
  title: string;
  withActions?: boolean;
  breadcrumbItems?: any;
  invoiceAction?: boolean;
};

const PageHeader = ({ withActions, breadcrumbItems, title, invoiceAction }: PageHeaderProps) => {
  const BREADCRUMBS_PROPS: Omit<BreadcrumbsProps, 'children'> = {};

  return (
    <>
      <Paper style={{ backgroundColor: 'transparent' }}>
        {withActions ? (
          <Flex
            justify="space-between"
            direction={{ base: 'column', sm: 'row' }}
            gap={{ base: 'sm', sm: 4 }}
          >
            <Stack gap={4}>
              <Title order={3}>{title}</Title>
              <Text>Welcome back, John!</Text>
            </Stack>
            <Flex align="center" gap="sm">
              <ActionIcon color="primary">
                <IconRefresh size={18} />
              </ActionIcon>
            </Flex>
          </Flex>
        ) : invoiceAction ? (
          <Flex
            align="center"
            justify="space-between"
            direction={{ base: 'row', sm: 'row' }}
            gap={{ base: 'sm', sm: 4 }}
          >
            <Stack>
              {/* <Title order={3}>{title}</Title> */}
              <Breadcrumbs {...BREADCRUMBS_PROPS}>{breadcrumbItems}</Breadcrumbs>
            </Stack>
            {/* <Button leftIcon={<IconPlus size={18}/>}>New Invoice</Button> */}
          </Flex>
        ) : (
          <Stack gap={'sm'}>
            {/* <Title order={3}>{title}</Title> */}
            <Breadcrumbs {...BREADCRUMBS_PROPS}>{breadcrumbItems}</Breadcrumbs>
          </Stack>
        )}
      </Paper>
      <Divider />
    </>
  );
};

export default PageHeader;
