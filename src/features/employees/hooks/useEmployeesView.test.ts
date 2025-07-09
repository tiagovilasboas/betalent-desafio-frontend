import { act, renderHook } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import { useEmployeesStore } from '../store/useEmployeesStore';
import { Employee } from '../types/employee';
import { useEmployeesView } from './useEmployeesView';

// Mock do Zustand store
vi.mock('../store/useEmployeesStore');

const mockEmployees: Employee[] = [
  { id: 1, name: 'Zoe', job: 'Developer', admission_date: '2022-01-01', phone: '111', image: '' },
  { id: 2, name: 'Alice', job: 'Manager', admission_date: '2021-01-01', phone: '222', image: '' },
  { id: 3, name: 'Bob', job: 'Designer', admission_date: '2023-01-01', phone: '333', image: '' },
  { id: 4, name: 'Charlie', job: 'Developer', admission_date: '2020-01-01', phone: '444', image: '' },
  { id: 5, name: 'David', job: 'Manager', admission_date: '2019-01-01', phone: '555', image: '' },
  { id: 6, name: 'Eve', job: 'Designer', admission_date: '2018-01-01', phone: '666', image: '' },
  { id: 7, name: 'Frank', job: 'Developer', admission_date: '2017-01-01', phone: '777', image: '' },
  { id: 8, name: 'Grace', job: 'Manager', admission_date: '2016-01-01', phone: '888', image: '' },
  { id: 9, name: 'Heidi', job: 'Designer', admission_date: '2015-01-01', phone: '999', image: '' },
  { id: 10, name: 'Ivan', job: 'Developer', admission_date: '2014-01-01', phone: '101', image: '' },
  { id: 11, name: 'Judy', job: 'Manager', admission_date: '2013-01-01', phone: '112', image: '' },
];

describe('useEmployeesView', () => {
  const setup = (initialStoreState = {}) => {
    vi.mocked(useEmployeesStore).mockReturnValue({
      employees: mockEmployees,
      loading: false,
      error: null,
      fetchEmployees: vi.fn(),
      ...initialStoreState,
    });

    return renderHook(() => useEmployeesView());
  };

  it('should return initial state with employees sorted by name ascending', () => {
    const { result } = setup();
    expect(result.current.paginatedEmployees[0].name).toBe('Alice');
    expect(result.current.totalPages).toBe(2);
    expect(result.current.currentPage).toBe(1);
  });

  it('should filter employees by search term', () => {
    const { result } = setup();

    act(() => {
      result.current.handleSearch('Manager');
    });

    expect(result.current.paginatedEmployees.length).toBe(4);
    expect(result.current.totalPages).toBe(1);
    expect(result.current.paginatedEmployees.every(e => e.job === 'Manager')).toBe(true);
  });

  it('should change sort order when handleSort is called', () => {
    const { result } = setup();

    // de asc para desc
    act(() => {
      result.current.handleSort('name');
    });

    expect(result.current.sortConfig.direction).toBe('desc');
    expect(result.current.paginatedEmployees[0].name).toBe('Zoe');

    // de desc para asc
    act(() => {
      result.current.handleSort('name');
    });
    expect(result.current.sortConfig.direction).toBe('asc');
    expect(result.current.paginatedEmployees[0].name).toBe('Alice');
  });
  
  it('should change sort key when handleSort is called with a new key', () => {
    const { result } = setup();

    act(() => {
      result.current.handleSort('admission_date');
    });

    expect(result.current.sortConfig.key).toBe('admission_date');
    expect(result.current.sortConfig.direction).toBe('asc');
    expect(result.current.paginatedEmployees[0].name).toBe('Judy');
  });

  it('should change page when handlePageChange is called', () => {
    const { result } = setup();

    act(() => {
      result.current.handlePageChange(2);
    });

    expect(result.current.currentPage).toBe(2);
    expect(result.current.paginatedEmployees.length).toBe(1);
    expect(result.current.paginatedEmployees[0].name).toBe('Zoe');
  });

  it('should reset to first page on search', () => {
    const { result } = setup();
    act(() => {
        result.current.handlePageChange(2);
    });
    expect(result.current.currentPage).toBe(2);

    act(() => {
        result.current.handleSearch('Developer');
    });
    expect(result.current.currentPage).toBe(1);
  });
  
  it('should reset to first page on sort', () => {
    const { result } = setup();
    act(() => {
        result.current.handlePageChange(2);
    });
    expect(result.current.currentPage).toBe(2);

    act(() => {
        result.current.handleSort('job');
    });
    expect(result.current.currentPage).toBe(1);
  });
}); 