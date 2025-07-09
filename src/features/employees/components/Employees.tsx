import {
  Card,
  Group,
  Pagination,
  Stack,
  Title,
  useMantineTheme,
} from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { Fragment, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { useEmployeesView } from '../hooks/useEmployeesView';
import { EmployeeContent } from './EmployeeContent';
import { EmployeeSearch } from './EmployeeSearch';
import EmployeeTableSkeleton from './EmployeeTableSkeleton';

export default function Employees() {
  const {
    paginatedEmployees,
    loading,
    apiError,
    sortConfig,
    currentPage,
    totalPages,
    searchTerm,
    handleSort,
    handleSearch,
    handlePageChange,
    fetchEmployees,
  } = useEmployeesView();
  const [showSkeleton, setShowSkeleton] = useState(false);

  useEffect(() => {
    if (loading) {
      const timer = setTimeout(() => {
        setShowSkeleton(true);
      }, 200); // Atraso de 200ms para exibir o skeleton

      return () => clearTimeout(timer);
    }
    setShowSkeleton(false);
  }, [loading]);

  const { t } = useTranslation('common');
  const theme = useMantineTheme();
  const isMobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);

  return (
    <Fragment>
      {isMobile ? (
        <Stack mb="md">
          <Title order={1}>{t('employees.title')}</Title>
          <EmployeeSearch onSearch={handleSearch} />
        </Stack>
      ) : (
        <Group justify="space-between" align="center" mb="md">
          <Title order={1}>{t('employees.title')}</Title>
          <EmployeeSearch onSearch={handleSearch} />
        </Group>
      )}

      <Card radius="md" shadow="md" p={0}>
        {loading && showSkeleton ? (
          <EmployeeTableSkeleton />
        ) : !loading ? (
          <EmployeeContent
            apiError={apiError}
            employees={paginatedEmployees}
            searchTerm={searchTerm}
            sortConfig={sortConfig}
            onSort={handleSort}
            onRetry={fetchEmployees}
          />
        ) : null}
      </Card>

      {totalPages > 1 && (
        <Group justify="center">
          <Pagination
            total={totalPages}
            value={currentPage}
            onChange={handlePageChange}
          />
        </Group>
      )}
    </Fragment>
  );
} 