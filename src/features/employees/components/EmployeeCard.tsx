import { Avatar, Card, Group, Stack,Text } from '@mantine/core';

import type { Employee } from '../types/employee';
import { formatDate, formatPhone } from '../types/formatters';

interface EmployeeCardProps {
  employee: Employee;
}

export function EmployeeCard({ employee }: EmployeeCardProps) {
  return (
    <Card shadow="md" padding="lg" radius="md" withBorder>
      <Group align="center" gap="md">
        <Avatar src={employee.image} size={64} radius="xl" />
        <Stack gap={2} style={{ flex: 1 }}>
          <Text fw={600} fz="lg">
            {employee.name}
          </Text>
          <Text c="dimmed" fz="sm">
            {employee.job}
          </Text>
        </Stack>
      </Group>
      <Group gap="md" mt="md">
        <Text fz="sm">
          <b>Admissão:</b> {formatDate(employee.admission_date)}
        </Text>
        <Text fz="sm">
          <b>Telefone:</b> {formatPhone(employee.phone)}
        </Text>
      </Group>
    </Card>
  );
} 