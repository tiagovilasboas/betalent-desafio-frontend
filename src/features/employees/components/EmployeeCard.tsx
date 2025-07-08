import { ActionIcon, Avatar, Badge, Card, Group, Stack, Text } from '@mantine/core';
import { IconEdit, IconTrash } from '@tabler/icons-react';
import { Employee } from '../types/employee';
import { formatCurrency, formatDate } from '../types/formatters';
import { useEmployeesStore } from '../store/useEmployeesStore';

interface EmployeeCardProps {
  employee: Employee;
}

export function EmployeeCard({ employee }: EmployeeCardProps) {
  const { deleteEmployee } = useEmployeesStore();

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

  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Stack gap="md">
        {/* Header com Avatar e Nome */}
        <Group justify="space-between" align="flex-start">
          <Group gap="md">
            <Avatar src={employee.image} size="lg" radius="xl" />
            <Stack gap="xs">
              <Text fw={600} size="lg">
                {employee.name}
              </Text>
              <Text size="sm" c="dimmed">
                {employee.job}
              </Text>
            </Stack>
          </Group>
          
          {/* Ações */}
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
        </Group>

        {/* Informações do Colaborador */}
        <Stack gap="xs">
          <Group gap="md">
            <Badge variant="light" color="blue">
              Tecnologia
            </Badge>
            <Text size="sm" c="dimmed">
              Admissão: {formatDate(employee.admission_date)}
            </Text>
          </Group>
          
          <Group gap="md">
            <Text size="sm">
              <Text span fw={500} c="green.6">
                Salário: {formatCurrency(5000)}
              </Text>
            </Text>
            <Text size="sm">
              <Text span fw={500}>
                Tel: {employee.phone}
              </Text>
            </Text>
          </Group>
        </Stack>
      </Stack>
    </Card>
  );
} 