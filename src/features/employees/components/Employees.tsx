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
    <Box
      style={{
        minHeight: '100vh',
        backgroundColor: '#555555',
        padding: '40px',
      }}
    >
      <Container size="xl">
        <Stack gap="xl">
          {/* Header com Logo BeMobile */}
          <Group justify="center">
            <Title order={1} size="h2" c="white" fw={700}>
              BeMobile
            </Title>
          </Group>

          {/* Área Principal com Borda Roxa */}
          <Box
            style={{
              border: '2px dashed #9747FF',
              borderRadius: '8px',
              padding: '20px',
              backgroundColor: 'transparent',
            }}
          >
            {/* Header com Campo de Busca */}
            <Box
              style={{
                backgroundColor: 'white',
                borderRadius: '8px',
                padding: '20px',
                marginBottom: '20px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
              }}
            >
              <EmployeeSearch />
            </Box>

            {/* Área da Tabela/Cards */}
            <Box
              style={{
                backgroundColor: 'white',
                borderRadius: '8px',
                padding: '20px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
              }}
            >
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
          </Box>
        </Stack>
      </Container>
    </Box>
  );
} 