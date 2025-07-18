import { Avatar, Table, Text, useMantineTheme } from '@mantine/core'
import { useTranslation } from 'react-i18next'

import { Employee } from '../types/employee'
import { formatDate, formatPhone } from '../types/formatters'
import { SortableHeader } from './SortableHeader'

interface EmployeeTableProps {
  employees: Employee[]
  sortKey: keyof Employee | ''
  sortOrder: 'asc' | 'desc'
  onSort: (key: keyof Employee) => void
}

export function EmployeeTable({
  employees,
  sortKey,
  sortOrder,
  onSort,
}: EmployeeTableProps) {
  const theme = useMantineTheme()
  const { t } = useTranslation('common')

  const rows = employees.map((employee) => (
    <Table.Tr key={employee.id}>
      <Table.Td style={{ width: '5%' }} />
      <Table.Td style={{ paddingLeft: 0 }}>
        <Avatar src={employee.image} alt={employee.name} radius="50%" />
      </Table.Td>
      <Table.Td>
        <Text fw={500}>{employee.name}</Text>
      </Table.Td>
      <Table.Td>
        <Text>{employee.job}</Text>
      </Table.Td>
      <Table.Td>
        <Text>{formatDate(employee.admission_date)}</Text>
      </Table.Td>
      <Table.Td>
        <Text>{formatPhone(employee.phone)}</Text>
      </Table.Td>
      <Table.Td style={{ width: '5%' }} />
    </Table.Tr>
  ))

  return (
    <Table
      highlightOnHover
      style={{
        tableLayout: 'fixed',
        borderRadius: theme.radius.md,
        overflow: 'hidden',
        width: '100%',
      }}
      styles={{
        tr: {
          borderBottom: `1px solid ${theme.colors.gray[2]}`,
        },
        th: {
          padding: '16px',
          [`@media (min-width: ${theme.breakpoints.sm})`]: {
            paddingLeft: '32px',
            paddingRight: '32px',
          },
        },
        td: {
          padding: '16px',
          [`@media (min-width: ${theme.breakpoints.sm})`]: {
            paddingLeft: '32px',
            paddingRight: '32px',
          },
        },
      }}
    >
      <Table.Thead
        style={{
          backgroundColor: theme.colors.primary[6],
          color: 'white',
        }}
      >
        <Table.Tr>
          <Table.Th style={{ width: '5%' }} />
          <Table.Th
            style={{
              width: '7%',
              color: 'inherit',
              paddingLeft: 0,
            }}
          >
            <Text fw={500} size="sm">
              {t('employees.table.header.photo')}
            </Text>
          </Table.Th>
          <Table.Th style={{ width: '25%', color: 'inherit' }}>
            <SortableHeader
              label={t('employees.table.header.name')}
              sortKey="name"
              currentSortKey={sortKey}
              sortOrder={sortOrder}
              onSort={onSort}
              size="sm"
            />
          </Table.Th>
          <Table.Th style={{ width: '20%', color: 'inherit' }}>
            <SortableHeader
              label={t('employees.table.header.job')}
              sortKey="job"
              currentSortKey={sortKey}
              sortOrder={sortOrder}
              onSort={onSort}
              size="sm"
            />
          </Table.Th>
          <Table.Th style={{ width: '20%', color: 'inherit' }}>
            <SortableHeader
              label={t('employees.table.header.admissionDate')}
              sortKey="admission_date"
              currentSortKey={sortKey}
              sortOrder={sortOrder}
              onSort={onSort}
              size="sm"
            />
          </Table.Th>
          <Table.Th style={{ width: '18%', color: 'inherit' }}>
            <Text fw={500} size="sm">
              {t('employees.table.header.phone')}
            </Text>
          </Table.Th>
          <Table.Th style={{ width: '5%' }} />
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>{rows}</Table.Tbody>
    </Table>
  )
}
