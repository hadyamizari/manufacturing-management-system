'use client';

import { useState } from 'react';
import { IconFilter } from '@tabler/icons-react';
import { DataTable } from 'mantine-datatable';
import {
  Button,
  Combobox,
  Container,
  Divider,
  Group,
  Modal,
  Paper,
  PaperProps,
  Radio,
  Stack,
  Text,
  TextInput,
  useCombobox,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

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
  const [opened, { open, close }] = useDisclosure(false);

  // Combobox data
  const assignedToOptions = ['John Doe', 'Jane Smith', 'Michael Johnson'];
  const modelTypeOptions = ['EX-200', 'BD-150', 'CR-500'];

  // Combobox states
  const [assignedTo, setAssignedTo] = useState<string | null>(null);
  const [modelType, setModelType] = useState<string | null>(null);
  const [warranty, setWarranty] = useState('any');

  // Combobox hooks
  const assignedToCombobox = useCombobox({
    onDropdownClose: () => assignedToCombobox.resetSelectedOption(),
  });

  const modelTypeCombobox = useCombobox({
    onDropdownClose: () => modelTypeCombobox.resetSelectedOption(),
  });

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
              <Button variant="light" onClick={open}>
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

              <Modal padding={'lg'} opened={opened} onClose={close} title="Filter Assets">
                <Stack gap={5}>
                  {/* Assigned To Combobox */}
                  <Text size="sm" fw={500} mt={'md'}>
                    Assigned To
                  </Text>
                  <Combobox
                    store={assignedToCombobox}
                    onOptionSubmit={(val) => {
                      setAssignedTo(val);
                      assignedToCombobox.closeDropdown();
                    }}
                  >
                    <Combobox.Target>
                      <TextInput
                        component="button"
                        type="button"
                        rightSection={<Combobox.Chevron />}
                        placeholder="Select Assigned To"
                        value={assignedTo || ''}
                        onClick={() => assignedToCombobox.toggleDropdown()}
                      />
                    </Combobox.Target>
                    <Combobox.Dropdown>
                      <Combobox.Options>
                        {assignedToOptions.map((item) => (
                          <Combobox.Option value={item} key={item}>
                            {item}
                          </Combobox.Option>
                        ))}
                      </Combobox.Options>
                    </Combobox.Dropdown>
                  </Combobox>

                  {/* Model Type Combobox */}
                  <Text size="sm" fw={500} mt={'md'}>
                    Model Type
                  </Text>
                  <Combobox
                    store={modelTypeCombobox}
                    onOptionSubmit={(val) => {
                      setModelType(val);
                      modelTypeCombobox.closeDropdown();
                    }}
                  >
                    <Combobox.Target>
                      <TextInput
                        component="button"
                        type="button"
                        rightSection={<Combobox.Chevron />}
                        placeholder="Select Model Type"
                        value={modelType || ''}
                        onClick={() => modelTypeCombobox.toggleDropdown()}
                      />
                    </Combobox.Target>
                    <Combobox.Dropdown>
                      <Combobox.Options>
                        {modelTypeOptions.map((item) => (
                          <Combobox.Option value={item} key={item}>
                            {item}
                          </Combobox.Option>
                        ))}
                      </Combobox.Options>
                    </Combobox.Dropdown>
                  </Combobox>

                  {/* Warranty Radio Buttons */}
                  <Text size="sm" fw={500} mt={'md'}>
                    Warranty
                  </Text>
                  <Radio.Group value={warranty} onChange={setWarranty}>
                    <Group>
                      <Radio value="any" label="Yes" />
                      <Radio value="active" label="No" />
                    </Group>
                  </Radio.Group>

                  {/* Apply Button */}
                  <Button onClick={() => close()} mt="md">
                    Apply Filters
                  </Button>
                </Stack>
              </Modal>
            </Paper>
          </Stack>
        </Stack>
      </Container>
    </>
  );
}
export default AssetsPage;
