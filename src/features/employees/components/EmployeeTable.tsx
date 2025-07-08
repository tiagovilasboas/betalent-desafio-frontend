import { ActionIcon, Badge, Group, Table, Text } from '@mantine/core';
import { IconEdit, IconTrash } from '@tabler/icons-react';
import { useEmployeesStore } from '../store/useEmployeesStore';
import { formatCurrency, formatDate } from '../types/formatters';

export function EmployeeTable() {
  const { filteredEmployees, deleteEmployee } = useEmployeesStore();

  const handleDelete = async (id: number) => {
    if (confirm('Tem certeza que deseja excluir este colaborador?')) {
      try {
        await deleteEmployee(id);
      } catch (error) {
        console.error('Erro ao deletar colaborador:', error);
      }
    }
  };

  const handleEdit = (id: number) => {
    // TODO: Implementar modal de edição
    console.log('Editar colaborador:', id);
  };

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
        <Text fw={500} c="green.6">
          {formatCurrency(5000)} {/* Mock data */}
        </Text>
      </Table.Td>
      <Table.Td>
        <Group gap="xs">
          <ActionIcon
            variant="subtle"
            color="blue"
            onClick={() => handleEdit(employee.id)}
            title="Editar"
          >
            <IconEdit size={16} />
          </ActionIcon>
          <ActionIcon
            variant="subtle"
            color="red"
            onClick={() => handleDelete(employee.id)}
            title="Excluir"
          >
            <IconTrash size={16} />
          </ActionIcon>
        </Group>
      </Table.Td>
    </Table.Tr>
  ));

  return (
    <Table striped highlightOnHover withTableBorder>
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