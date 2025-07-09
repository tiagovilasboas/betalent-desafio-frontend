import { Group, Text, UnstyledButton } from '@mantine/core'
import {
  IconChevronDown,
  IconChevronUp,
  IconSelector,
} from '@tabler/icons-react'

import { Employee } from '../types/employee'

interface SortableHeaderProps {
  label: string
  sortKey: keyof Employee
  currentSortKey: keyof Employee | ''
  sortOrder: 'asc' | 'desc'
  onSort: (key: keyof Employee) => void
  size?: string
}

export function SortableHeader({
  label,
  sortKey,
  currentSortKey,
  sortOrder,
  onSort,
  size,
}: SortableHeaderProps) {
  const isCurrent = currentSortKey === sortKey
  const Icon = isCurrent
    ? sortOrder === 'asc'
      ? IconChevronUp
      : IconChevronDown
    : IconSelector

  return (
    <UnstyledButton onClick={() => onSort(sortKey)}>
      <Group gap="xs" wrap="nowrap">
        <Text fw={500} size={size}>
          {label}
        </Text>
        <Icon size={14} />
      </Group>
    </UnstyledButton>
  )
}
