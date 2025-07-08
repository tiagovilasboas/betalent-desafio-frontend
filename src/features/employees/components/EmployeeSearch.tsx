// Camada de Apresentação - Responsabilidade: capturar input do usuário
// Dependency Rule: Depende da camada de estado

import { TextInput } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';

import { useEmployeesStore } from '../store/useEmployeesStore';

export function EmployeeSearch() {
  const { filters, setFilters } = useEmployeesStore();

  const handleSearchChange = (value: string) => {
    setFilters({ ...filters, search: value });
  };

  return (
    <TextInput
      placeholder="Pesquisar"
      value={filters.search}
      onChange={(event) => handleSearchChange(event.currentTarget.value)}
      leftSection={<IconSearch size={16} />}
    />
  );
} 