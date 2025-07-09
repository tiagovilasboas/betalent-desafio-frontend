import {
  Card,
  Group,
  Pagination,
  Title,
} from '@mantine/core';
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

  return (
    <Fragment>
      <Group justify="space-between" align="center">
        <Title order={1}>{t('employees.title')}</Title>
        <EmployeeSearch onSearch={handleSearch} />
      </Group>

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