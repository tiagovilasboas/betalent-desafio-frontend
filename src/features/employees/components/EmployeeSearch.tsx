// Camada de Apresentação - Responsabilidade: capturar input do usuário
// Dependency Rule: Depende da camada de estado

import { TextInput } from '@mantine/core';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import SearchIconUrl from '../../../assets/icon-search.svg';
import { useEmployeesStore } from '../store/useEmployeesStore';

export function EmployeeSearch() {
  const { filters, setFilters } = useEmployeesStore();
  const [searchValue, setSearchValue] = useState(filters.search);
  const { t } = useTranslation('common');

  useEffect(() => {
    const handler = setTimeout(() => {
      setFilters({ ...filters, search: searchValue });
    }, 300); // 300ms debounce delay

    return () => {
      clearTimeout(handler);
    };
  }, [searchValue, setFilters, filters]);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.currentTarget.value);
  };

  return (
    <TextInput
      placeholder={t('employees.search.placeholder')}
      value={searchValue}
      onChange={handleSearchChange}
      rightSection={
        <img
          src={SearchIconUrl}
          alt={t('employees.search.alt')}
          width={20}
          height={20}
        />
      }
      rightSectionProps={{ style: { paddingRight: '12px' } }}
      radius="md"
      styles={(theme) => ({
        input: {
          height: '48px',
          paddingRight: '44px',
          color: theme.colors.gray[3],
          borderColor: theme.colors.gray[2],
          '&::placeholder': {
            color: theme.colors.gray[2],
          },
          '&:focus, &:focusWithin': {
            outline: 'none',
            borderColor: theme.colors.primary[6],
          },
        },
      })}
    />
  );
} 