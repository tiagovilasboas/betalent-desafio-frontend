import { Group, Text, UnstyledButton } from '@mantine/core';
import {
  IconChevronDown,
  IconChevronUp,
  IconSelector,
} from '@tabler/icons-react';

import { useEmployeesStore } from '../store/useEmployeesStore';
import { Employee } from '../types/employee';

interface SortableHeaderProps {
  label: string;
  sortKey: keyof Employee;
}

export function SortableHeader({ label, sortKey }: SortableHeaderProps) {
  const {
    sortKey: currentSortKey,
    sortOrder,
    setSorting,
  } = useEmployeesStore();

  const isCurrent = currentSortKey === sortKey;
  const Icon = isCurrent
    ? sortOrder === 'asc'
      ? IconChevronUp
      : IconChevronDown
    : IconSelector;

  return (
    <UnstyledButton onClick={() => setSorting(sortKey)}>
      <Group gap="xs" wrap="nowrap">
        <Text fw={500}>{label}</Text>
        <Icon size={14} />
      </Group>
    </UnstyledButton>
  );
} 