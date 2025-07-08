import { ActionIcon, Avatar, Badge, Card, Group, Stack, Text } from '@mantine/core';
import { IconEdit, IconTrash } from '@tabler/icons-react';
import { Employee } from '../types/employee';
import { formatCurrency, formatDate } from '../types/formatters';

interface EmployeeCardProps {
  employee: Employee;
}

export function EmployeeCard({ employee }: EmployeeCardProps) {
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
          <Group gap="xs">
            <ActionIcon variant="subtle" color="blue" size="sm">
              <IconEdit size={16} />
            </ActionIcon>
            <ActionIcon variant="subtle" color="red" size="sm">
              <IconTrash size={16} />
            </ActionIcon>
          </Group>
        </Group>

        {/* Informações */}
        <Stack gap="xs">
          <Group gap="md">
            <Badge variant="light" color="blue">
              Tecnologia
            </Badge>
            <Text size="sm">
              <Text span fw={500}>
                Admissão:
              </Text>{' '}
              {formatDate(employee.admission_date)}
            </Text>
          </Group>
          <Text size="sm">
            <Text span fw={500}>
              Salário:
            </Text>{' '}
            <Text span fw={600} c="green.6">
              {formatCurrency(5000)}
            </Text>
          </Text>
          <Text size="sm">
            <Text span fw={500}>
              Telefone:
            </Text>{' '}
            {employee.phone}
          </Text>
        </Stack>
      </Stack>
    </Card>
  );
} 