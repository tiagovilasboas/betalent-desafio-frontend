import { Avatar, Table, Text, useMantineTheme } from '@mantine/core';

import { useEmployeesStore } from '../store/useEmployeesStore';
import { formatDate, formatPhone } from '../types/formatters';

export function EmployeeTable() {
  const { filteredEmployees } = useEmployeesStore();
  const theme = useMantineTheme();

  const rows = filteredEmployees.map((employee) => (
    <Table.Tr key={employee.id}>
      <Table.Td>
        <Avatar src={employee.image} alt={employee.name} radius="xl" />
      </Table.Td>
      <Table.Td>
        <Text fw={500}>{employee.name}</Text>
      </Table.Td>
      <Table.Td>
        <Text size="sm">{employee.job}</Text>
      </Table.Td>
      <Table.Td>
        <Text size="sm">{formatDate(employee.admission_date)}</Text>
      </Table.Td>
      <Table.Td>
        <Text size="sm">{formatPhone(employee.phone)}</Text>
      </Table.Td>
    </Table.Tr>
  ));

  return (
    <Table verticalSpacing="md">
      <Table.Thead>
        <Table.Tr
          style={{
            backgroundColor: theme.colors.primary[500],
            color: 'white',
          }}
        >
          <Table.Th style={{ color: 'inherit' }}>Foto</Table.Th>
          <Table.Th style={{ color: 'inherit' }}>Nome</Table.Th>
          <Table.Th style={{ color: 'inherit' }}>Cargo</Table.Th>
          <Table.Th style={{ color: 'inherit' }}>Data de Admissão</Table.Th>
          <Table.Th style={{ color: 'inherit' }}>Telefone</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>{rows}</Table.Tbody>
    </Table>
  );
} 