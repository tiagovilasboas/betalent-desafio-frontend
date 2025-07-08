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
      <Stack gap="xl">
        <Group justify="space-between">
          <Title order={2} size="h1">
            Funcionários
          </Title>
          <EmployeeSearch />
        </Group>

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