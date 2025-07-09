import {
  Card,
  Group,
  Pagination,
  Stack,
  Title,
  useMantineTheme,
} from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { Fragment } from 'react';
import { useTranslation } from 'react-i18next';

import { useEmployeesView } from '../hooks/useEmployeesView';
import { EmployeeContent } from './EmployeeContent';
import { EmployeeSearch } from './EmployeeSearch';

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
        <EmployeeContent
          loading={loading}
          apiError={apiError}
          employees={paginatedEmployees}
          searchTerm={searchTerm}
          sortConfig={sortConfig}
          onSort={handleSort}
          onRetry={fetchEmployees}
        />
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