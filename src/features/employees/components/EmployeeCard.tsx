import {
  Accordion,
  Avatar,
  Group,
  Stack,
  Text,
  rem,
} from '@mantine/core';
import { IconChevronDown } from '@tabler/icons-react';

import { Employee } from '../types/employee';
import { formatDate, formatPhone } from '../types/formatters';

interface EmployeeCardProps {
  employee: Employee;
}

export function EmployeeCard({ employee }: EmployeeCardProps) {
  return (
    <Accordion
      chevron={<IconChevronDown />}
      styles={{
        chevron: {
          '&[data-rotate]': {
            transform: 'rotate(180deg)',
          },
        },
      }}
    >
      <Accordion.Item value={employee.id.toString()}>
        <Accordion.Control>
          <Group>
            <Avatar src={employee.image} radius="xl" />
            <Text fw={500}>{employee.name}</Text>
          </Group>
        </Accordion.Control>
        <Accordion.Panel>
          <Stack pl={rem(48)}>
            <Text>
              <strong>Cargo:</strong> {employee.job}
            </Text>
            <Text>
              <strong>Data de Admissão:</strong>{' '}
              {formatDate(employee.admission_date)}
            </Text>
            <Text>
              <strong>Telefone:</strong> {formatPhone(employee.phone)}
            </Text>
          </Stack>
        </Accordion.Panel>
      </Accordion.Item>
    </Accordion>
  );
} 