'use client';

import { useState } from 'react';
import { IconFilter, IconSearch } from '@tabler/icons-react';
import { DataTable } from 'mantine-datatable';
import {
  Button,
  Container,
  Divider,
  Group,
  Paper,
  PaperProps,
  Stack,
  Text,
  TextInput,
} from '@mantine/core';

const records = [
  {
    assetId: 'A001',
    name: 'Excavator',
    serialNumber: 'SN123456',
    modelType: 'EX-200',
    maintenanceSchedule: 'Monthly',
    status: 'Active',
    warranty: '3 years',
    hourMeter: '500 hrs',
  },
  {
    assetId: 'A002',
    name: 'Bulldozer',
    serialNumber: 'SN987654',
    modelType: 'BD-150',
    maintenanceSchedule: 'Quarterly',
    status: 'Inactive',
    warranty: '2 years',
    hourMeter: '1200 hrs',
  },
  {
    assetId: 'A003',
    name: 'Crane',
    serialNumber: 'SN112233',
    modelType: 'CR-500',
    maintenanceSchedule: 'Bi-Weekly',
    status: 'Under Repair',
    warranty: '1 year',
    hourMeter: '800 hrs',
  },
];

const PAPER_PROPS: PaperProps = {
  p: 'md',
  shadow: 'md',
  radius: 'md',
};

function AssetsPage() {
  const [search, setSearch] = useState('');
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;
    setSearch(value);
    // setSortedData(sortData(employees, { sortBy, reversed: reverseSortDirection, search: value }));
  };
  return (
    <>
      <Container fluid>
        <Stack gap={'lg'}>
          <Group justify="space-between" mt={10} mb={-10}>
            <Text size="xl" fw={'normal'}>
              Assets
            </Text>
            <Group>
              <Button variant="light"> + Add New</Button>
              <Button variant="light">
                <IconFilter size={20} stroke={2.2} />
              </Button>
            </Group>
          </Group>
          <Divider />

          <Stack my={20}>
            <TextInput
              style={{ flexGrow: 1 }}
              placeholder="Search by: Asset ID, Name, or Serial Number"
              value={search}
              onChange={handleSearchChange}
            />

            <Paper {...PAPER_PROPS}>
              <DataTable
                verticalSpacing="sm"
                highlightOnHover
                columns={[
                  { accessor: 'assetId', title: 'Asset ID' },
                  { accessor: 'name', title: 'Name' },
                  { accessor: 'serialNumber', title: 'Serial Number' },
                  { accessor: 'modelType', title: 'Model Type' },
                  { accessor: 'maintenanceSchedule', title: 'Maintenance Schedule' },
                  { accessor: 'status', title: 'Status' },
                  { accessor: 'warranty', title: 'Warranty' },
                  { accessor: 'hourMeter', title: 'Hour Meter' },
                ]}
                records={records}
              />
            </Paper>
          </Stack>
        </Stack>
      </Container>
    </>
  );
}
export default AssetsPage;
