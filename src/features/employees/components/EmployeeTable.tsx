import { ActionIcon, Badge, Group, Table, Text } from '@mantine/core';
import { IconEdit, IconTrash } from '@tabler/icons-react';
import { useEmployeesStore } from '../store/useEmployeesStore';
import { formatCurrency, formatDate } from '../types/formatters';

export function EmployeeTable() {
  const { filteredEmployees } = useEmployeesStore();

  const rows = filteredEmployees.map((employee) => (
    <Table.Tr key={employee.id}>
      <Table.Td>
        <Text fw={500}>{employee.name}</Text>
      </Table.Td>
      <Table.Td>
        <Text size="sm" c="dimmed">
          {employee.job}
        </Text>
      </Table.Td>
      <Table.Td>
        <Badge variant="light" color="blue">
          Tecnologia
        </Badge>
      </Table.Td>
      <Table.Td>
        <Text size="sm">{formatDate(employee.admission_date)}</Text>
      </Table.Td>
      <Table.Td>
        <Text fw={600} c="green.6">
          {formatCurrency(5000)}
        </Text>
      </Table.Td>
      <Table.Td>
        <Group gap="xs">
          <ActionIcon variant="subtle" color="blue" size="sm">
            <IconEdit size={16} />
          </ActionIcon>
          <ActionIcon variant="subtle" color="red" size="sm">
            <IconTrash size={16} />
          </ActionIcon>
        </Group>
      </Table.Td>
    </Table.Tr>
  ));

  return (
    <Table striped highlightOnHover withTableBorder withColumnBorders>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>Nome</Table.Th>
          <Table.Th>Cargo</Table.Th>
          <Table.Th>Departamento</Table.Th>
          <Table.Th>Data de Admissão</Table.Th>
          <Table.Th>Salário</Table.Th>
          <Table.Th>Ações</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>{rows}</Table.Tbody>
    </Table>
  );
} 