'use client';

import Head from 'next/head';
import { Anchor, Button, Container, Divider, Group, Stack, Text, Title } from '@mantine/core';
import PageHeader from '@/components/PageHeader/PageHeader';

const items = [{ title: 'Assets', href: '#' }].map((item, index) => (
  <Anchor href={item.href} key={index}>
    {item.title}
  </Anchor>
));

function AssetsPage() {
  return (
    <>
      <Container>
        <Stack gap={'lg'}>
          <Group justify="space-between" mt={10} mb={-10}>
            <Text size="xl" fw={'normal'}>
              Assets
            </Text>
            <Button variant="light"> + Add New</Button>
          </Group>
          <Divider />
          <Text>hi</Text>
        </Stack>
      </Container>
    </>
  );
}
export default AssetsPage;
