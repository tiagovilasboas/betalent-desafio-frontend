import { Avatar, Group, Table, Text } from '@mantine/core';

import { useEmployeesStore } from '../store/useEmployeesStore';
import { formatDate, formatPhone } from '../types/formatters';

export function EmployeeTable() {
  const { filteredEmployees, loading } = useEmployeesStore();

  if (loading) {
    return <Text>Carregando colaboradores...</Text>;
  }

  if (!filteredEmployees.length) {
    return <Text>Nenhum colaborador encontrado.</Text>;
  }

  return (
    <Table striped highlightOnHover withTableBorder>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>Colaborador</Table.Th>
          <Table.Th>Cargo</Table.Th>
          <Table.Th>Data de Admissão</Table.Th>
          <Table.Th>Telefone</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>
        {filteredEmployees.map((employee) => (
          <Table.Tr key={employee.id}>
            <Table.Td>
              <Group>
                <Avatar src={employee.image} size="md" />
                <Text fw={500}>{employee.name}</Text>
              </Group>
            </Table.Td>
            <Table.Td>{employee.job}</Table.Td>
            <Table.Td>{formatDate(employee.admission_date)}</Table.Td>
            <Table.Td>{formatPhone(employee.phone)}</Table.Td>
          </Table.Tr>
        ))}
      </Table.Tbody>
    </Table>
  );
} 