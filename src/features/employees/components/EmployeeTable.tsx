import { Avatar, Table, Text, useMantineTheme } from '@mantine/core';

import { Employee } from '../types/employee';
import { formatDate, formatPhone } from '../types/formatters';
import { SortableHeader } from './SortableHeader';

interface EmployeeTableProps {
  employees: Employee[];
}

export function EmployeeTable({ employees }: EmployeeTableProps) {
  const theme = useMantineTheme();

  const rows = employees.map((employee) => (
    <Table.Tr key={employee.id}>
      <Table.Td style={{ paddingLeft: theme.spacing.xl }}>
        <Avatar src={employee.image} alt={employee.name} radius="50%" />
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
    <Table
      highlightOnHover
      style={{
        borderRadius: theme.radius.md,
        overflow: 'hidden',
        width: '100%',
      }}
      styles={(theme) => ({
        tr: {
          borderBottom: `1px solid ${theme.colors.gray[2]}`,
        },
        td: {
          paddingTop: '4px',
          paddingBottom: '4px',
        },
      })}
    >
      <Table.Thead
        style={{
          backgroundColor: theme.colors.primary[6],
          color: 'white',
        }}
      >
        <Table.Tr>
          <Table.Th
            style={{ color: 'inherit', paddingLeft: theme.spacing.xl }}
          >
            <Text fw={500}>FOTO</Text>
          </Table.Th>
          <Table.Th style={{ color: 'inherit' }}>
            <SortableHeader label="NOME" sortKey="name" />
          </Table.Th>
          <Table.Th style={{ color: 'inherit' }}>
            <SortableHeader label="CARGO" sortKey="job" />
          </Table.Th>
          <Table.Th style={{ color: 'inherit' }}>
            <SortableHeader
              label="DATA DE ADMISSÃO"
              sortKey="admission_date"
            />
          </Table.Th>
          <Table.Th style={{ color: 'inherit' }}>
            <Text fw={500}>TELEFONE</Text>
          </Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>{rows}</Table.Tbody>
    </Table>
  );
} 