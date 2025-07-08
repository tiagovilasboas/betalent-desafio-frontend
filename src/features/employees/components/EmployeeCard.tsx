import {
  Accordion,
  Avatar,
  Group,
  rem,
  Stack,
  Text,
  useMantineTheme,
} from '@mantine/core';
import { IconChevronDown } from '@tabler/icons-react';

import { Employee } from '../types/employee';
import { formatDate, formatPhone } from '../types/formatters';

interface EmployeeCardProps {
  employee: Employee;
}

export function EmployeeCard({ employee }: EmployeeCardProps) {
  const theme = useMantineTheme();
  return (
    <Accordion
      chevron={
        <IconChevronDown
          color={theme.colors.primary[6]}
          style={{ width: rem(20), height: rem(20) }}
        />
      }
      styles={(theme) => ({
        chevron: {
          '&[data-rotate]': {
            transform: 'rotate(180deg)',
          },
        },
        item: {
          borderBottom: `1px solid ${theme.colors.gray[2]}`,
          boxShadow: 'none',
        },
      })}
    >
      <Accordion.Item value={employee.id.toString()}>
        <Accordion.Control>
          <Group>
            <Avatar src={employee.image} radius="50%" />
            <Text fw={500}>{employee.name}</Text>
          </Group>
        </Accordion.Control>
        <Accordion.Panel>
          <Stack pl={rem(48)} gap="xs">
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