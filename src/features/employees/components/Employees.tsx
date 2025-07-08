import {
  Box,
  Card,
  Group,
  Pagination,
  rem,
  Stack,
  Text,
  Title,
  useMantineTheme,
} from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { Fragment, useEffect } from 'react';

import {
  selectProcessedEmployees,
  useEmployeesStore,
} from '../store/useEmployeesStore';
import { EmployeeCard } from './EmployeeCard';
import { EmployeeSearch } from './EmployeeSearch';
import { EmployeeTable } from './EmployeeTable';
import EmployeeTableSkeleton from './EmployeeTableSkeleton';

export default function Employees() {
  const { fetchEmployees, currentPage, setPage, loading, error } =
    useEmployeesStore();
  const processedEmployees = useEmployeesStore(selectProcessedEmployees);
  const isMobile = useMediaQuery('(max-width: 768px)');
  const theme = useMantineTheme();

  useEffect(() => {
    fetchEmployees();
  }, [fetchEmployees]);

  const itemsPerPage = isMobile ? 8 : 10;
  const localTotalPages = Math.ceil(processedEmployees.length / itemsPerPage);

  useEffect(() => {
    if (currentPage > localTotalPages) {
      setPage(localTotalPages || 1);
    }
  }, [currentPage, localTotalPages, setPage]);

  const start = (currentPage - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  const paginatedEmployees = processedEmployees.slice(start, end);

  return (
    <Fragment>
      <Group justify="space-between" align="center">
        <Title order={1}>Funcionários</Title>
        <EmployeeSearch />
      </Group>

      <Card radius="md" shadow="md" p={0}>
        {loading ? (
          <EmployeeTableSkeleton />
        ) : error ? (
          <Box p="xl" style={{ textAlign: 'center' }}>
            <Text c="red" size="lg">
              Ocorreu um erro ao carregar os funcionários.
            </Text>
            <Text c="dimmed">Tente novamente mais tarde.</Text>
          </Box>
        ) : paginatedEmployees.length === 0 ? (
          <Box p="xl" style={{ textAlign: 'center' }}>
            <Text size="lg">Nenhum funcionário encontrado.</Text>
            <Text c="dimmed">
              Tente ajustar sua busca ou limpar os filtros.
            </Text>
          </Box>
        ) : isMobile ? (
          <Stack gap={0}>
            <Box
              style={{
                backgroundColor: theme.colors.primary[6],
                color: 'white',
                borderRadius: `${theme.radius.sm} ${theme.radius.sm} 0 0`,
              }}
            >
              <Group px="md" py="sm" align="center">
                <Text w={rem(38)} ta="left" size="sm" fw={500}>
                  FOTO
                </Text>
                <Text size="sm" fw={500}>
                  NOME
                </Text>
              </Group>
            </Box>
            {paginatedEmployees.map((employee) => (
              <EmployeeCard key={employee.id} employee={employee} />
            ))}
          </Stack>
        ) : (
          <EmployeeTable employees={paginatedEmployees} />
        )}
      </Card>
      <Group justify="center">
        <Pagination
          total={localTotalPages}
          value={currentPage}
          onChange={setPage}
          siblings={isMobile ? 1 : undefined}
          boundaries={isMobile ? 1 : undefined}
        />
      </Group>
    </Fragment>
  );
} 