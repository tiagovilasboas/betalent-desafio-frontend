import { Skeleton, Table } from '@mantine/core';

const EmployeeTableSkeleton = () => {
  const SKELETON_ROWS = 5;

  return (
    <Table>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>
            <Skeleton height={20} width="40%" />
          </Table.Th>
          <Table.Th>
            <Skeleton height={20} width="20%" />
          </Table.Th>
          <Table.Th>
            <Skeleton height={20} width="20%" />
          </Table.Th>
          <Table.Th>
            <Skeleton height={20} width="20%" />
          </Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>
        {Array.from({ length: SKELETON_ROWS }).map((_, index) => (
          <Table.Tr key={index}>
            <Table.Td>
              <Skeleton height={40} />
            </Table.Td>
            <Table.Td>
              <Skeleton height={40} />
            </Table.Td>
            <Table.Td>
              <Skeleton height={40} />
            </Table.Td>
            <Table.Td>
              <Skeleton height={40} />
            </Table.Td>
          </Table.Tr>
        ))}
      </Table.Tbody>
    </Table>
  );
};

export default EmployeeTableSkeleton; 