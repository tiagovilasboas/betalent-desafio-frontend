import { Container, SimpleGrid } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { useEffect } from 'react';

import { useEmployeesStore } from '../store/useEmployeesStore';
import { EmployeeCard } from './EmployeeCard';
import { EmployeeSearch } from './EmployeeSearch';
import { EmployeeTable } from './EmployeeTable';

export function Employees() {
  const { filteredEmployees, fetchEmployees } = useEmployeesStore();
  const isMobile = useMediaQuery('(max-width: 48em)'); // 48em = 768px (Mantine md)

  useEffect(() => {
    fetchEmployees();
  }, [fetchEmployees]);

  return (
    <Container size="lg" py="xl">
      <EmployeeSearch />
      {isMobile ? (
        <SimpleGrid cols={1} spacing="md">
          {filteredEmployees.map((employee) => (
            <EmployeeCard key={employee.id} employee={employee} />
          ))}
        </SimpleGrid>
      ) : (
        <EmployeeTable />
      )}
    </Container>
  );
}

export default Employees; 