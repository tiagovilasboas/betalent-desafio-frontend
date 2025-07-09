import { Stack } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

import { Employee } from '../types/employee';
import { ApiError } from './ApiError';
import { EmployeeCard } from './EmployeeCard';
import { EmployeeTable } from './EmployeeTable';
import { NoResults } from './NoResults';

interface EmployeeContentProps {
  apiError: string | null;
  employees: Employee[];
  searchTerm: string;
  sortConfig: {
    key: keyof Employee | '';
    direction: 'asc' | 'desc';
  };
  onSort: (key: keyof Employee) => void;
  onRetry: () => void;
}

export function EmployeeContent({
  apiError,
  employees,
  searchTerm,
  sortConfig,
  onSort,
  onRetry,
}: EmployeeContentProps) {
  const isMobile = useMediaQuery('(max-width: 768px)');

  if (apiError) {
    return <ApiError message={apiError} onRetry={onRetry} />;
  }

  if (employees.length === 0 && searchTerm) {
    return <NoResults searchTerm={searchTerm} />;
  }

  if (employees.length === 0) {
    // Pode ser um estado inicial ou busca sem resultados sem termo
    // Por enquanto, não mostra nada para manter o layout limpo
    return null;
  }

  if (isMobile) {
    return (
      <Stack gap={0}>
        {employees.map((employee) => (
          <EmployeeCard key={employee.id} employee={employee} />
        ))}
      </Stack>
    );
  }

  return (
    <EmployeeTable
      employees={employees}
      sortKey={sortConfig.key}
      sortOrder={sortConfig.direction}
      onSort={onSort}
    />
  );
} 