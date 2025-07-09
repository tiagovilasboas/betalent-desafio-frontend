import {
  Card,
  Group,
  Pagination,
  Stack,
  Title,
} from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { Fragment } from 'react';
import { useTranslation } from 'react-i18next';

import { useEmployeesView } from '../hooks/useEmployeesView';
import { ApiError } from './ApiError';
import { EmployeeCard } from './EmployeeCard';
import { EmployeeSearch } from './EmployeeSearch';
import { EmployeeTable } from './EmployeeTable';
import EmployeeTableSkeleton from './EmployeeTableSkeleton';
import { NoResults } from './NoResults';

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

  const isMobile = useMediaQuery('(max-width: 768px)');
  const { t } = useTranslation('common');

  const showNoResults = !loading && !apiError && paginatedEmployees.length === 0 && searchTerm;
  const showTableOrCards = !loading && !apiError && paginatedEmployees.length > 0;

  return (
    <Fragment>
      <Group justify="space-between" align="center">
        <Title order={1}>{t('employees.title')}</Title>
        <EmployeeSearch onSearch={handleSearch} />
      </Group>

      <Card radius="md" shadow="md" p={0}>
        {loading && <EmployeeTableSkeleton />}
        {apiError && <ApiError message={apiError} onRetry={fetchEmployees} />}
        {showNoResults && <NoResults searchTerm={searchTerm} />}

        {showTableOrCards &&
          (isMobile ? (
            <Stack gap={0}>
              {paginatedEmployees.map((employee) => (
                <EmployeeCard key={employee.id} employee={employee} />
              ))}
            </Stack>
          ) : (
            <EmployeeTable
              employees={paginatedEmployees}
              sortKey={sortConfig.key}
              sortOrder={sortConfig.direction}
              onSort={handleSort}
            />
          ))}
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