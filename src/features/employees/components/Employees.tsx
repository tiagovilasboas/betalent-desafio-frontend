import { Box, Container, Group, Stack, Title } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { useEffect } from 'react';
import { useEmployeesStore } from '../store/useEmployeesStore';
import { EmployeeCard } from './EmployeeCard';
import { EmployeeSearch } from './EmployeeSearch';
import { EmployeeTable } from './EmployeeTable';

export default function Employees() {
  const { filteredEmployees, fetchEmployees } = useEmployeesStore();
  const isMobile = useMediaQuery('(max-width: 768px)');

  useEffect(() => {
    fetchEmployees();
  }, [fetchEmployees]);

  return (
    <Container size="xl" py="xl">
      {/* Header com Logo e Busca */}
      <Stack gap="xl">
        {/* Logo BeMobile */}
        <Group justify="center">
          <Title order={1} size="h2" c="blue.6" fw={700}>
            BeMobile
          </Title>
        </Group>

        {/* Campo de Busca */}
        <Box>
          <EmployeeSearch />
        </Box>

        {/* Área de Conteúdo - Tabela ou Cards */}
        <Box>
          {isMobile ? (
            <Stack gap="md">
              {filteredEmployees.map((employee) => (
                <EmployeeCard key={employee.id} employee={employee} />
              ))}
            </Stack>
          ) : (
            <EmployeeTable />
          )}
        </Box>
      </Stack>
    </Container>
  );
} 