// Camada de Apresentação - Responsabilidade: capturar input do usuário
// Dependency Rule: Depende da camada de estado

import { TextInput } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';

import { useEmployeesStore } from '../store/useEmployeesStore';

export function EmployeeSearch() {
  const { filters, setFilters } = useEmployeesStore();
  
  // SRP: Responsabilidade única - capturar input do usuário
  const handleSearchChange = (value: string) => {
    setFilters({ ...filters, search: value });
  };

  return (
    <TextInput
      placeholder="Pesquisar por nome, cargo ou telefone..."
      value={filters.search}
      onChange={(e) => handleSearchChange(e.target.value)}
      leftSection={<IconSearch size={16} />}
      size="md"
      radius="md"
      style={{ marginBottom: '1rem' }}
    />
  );
} 