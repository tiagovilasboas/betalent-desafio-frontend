import { useCallback, useEffect, useMemo, useState } from 'react';

import { useEmployeesStore } from '../store/useEmployeesStore';
import { Employee } from '../types/employee';

const PAGE_SIZE = 10;

export function useEmployeesView() {
  const {
    employees,
    fetchEmployees,
    loading,
    error: apiError,
  } = useEmployeesStore();
  const [searchTerm, setSearchTerm] = useState('');
  const [sortConfig, setSortConfig] = useState<{
    key: keyof Employee;
    direction: 'asc' | 'desc';
  }>({
    key: 'name',
    direction: 'asc',
  });
  const [currentPage, setCurrentPage] = useState(1);

  // Re-fetch employees when the component mounts
  useEffect(() => {
    fetchEmployees();
  }, [fetchEmployees]);

  const handleSearch = useCallback((term: string) => {
    setSearchTerm(term);
    setCurrentPage(1); // Reset to first page on new search
  }, []);

  const handleSort = useCallback(
    (key: keyof Employee) => {
      setSortConfig((current) => {
        const isAsc = current.key === key && current.direction === 'asc';
        return { key, direction: isAsc ? 'desc' : 'asc' };
      });
      setCurrentPage(1); // Reset to first page on sort
    },
    [setSortConfig]
  );

  const handlePageChange = useCallback((page: number) => {
    setCurrentPage(page);
  }, []);

  const filteredAndSortedEmployees = useMemo(() => {
    let result = [...employees];

    // Filtering
    if (searchTerm) {
      const lowerCaseSearchTerm = searchTerm.toLowerCase();
      result = result.filter(
        (employee) =>
          employee.name.toLowerCase().includes(lowerCaseSearchTerm) ||
          employee.job.toLowerCase().includes(lowerCaseSearchTerm) ||
          employee.phone.includes(searchTerm)
      );
    }

    // Sorting
    if (sortConfig.key) {
      result.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'asc' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'asc' ? 1 : -1;
        }
        return 0;
      });
    }

    return result;
  }, [employees, searchTerm, sortConfig]);

  const totalPages = Math.ceil(
    filteredAndSortedEmployees.length / PAGE_SIZE
  );

  const paginatedEmployees = useMemo(() => {
    const startIndex = (currentPage - 1) * PAGE_SIZE;
    return filteredAndSortedEmployees.slice(startIndex, startIndex + PAGE_SIZE);
  }, [filteredAndSortedEmployees, currentPage]);

  return {
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
    fetchEmployees, // Pass through the fetch function
  };
} 