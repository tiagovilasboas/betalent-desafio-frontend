import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import { employeeRepository } from '../repository/EmployeeRepository';
import { Employee } from '../types/employee';
import { useEmployeesStore } from './useEmployeesStore';

// Mock do repositório
vi.mock('../repository/EmployeeRepository', () => ({
  employeeRepository: {
    getAll: vi.fn(),
  },
}));

const mockEmployees: Employee[] = [
  { id: 1, name: 'Alice', job: 'Manager', admission_date: '2021-01-01', phone: '222', image: '' },
];

describe('useEmployeesStore', () => {

  // Reset store state before each test
  beforeEach(() => {
    useEmployeesStore.setState({
      employees: [],
      loading: false,
      error: null,
    });
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('should set loading to true then false, and populate employees on successful fetch', async () => {
    // Arrange
    vi.mocked(employeeRepository.getAll).mockResolvedValue(mockEmployees);
    const { getState } = useEmployeesStore;
    
    // Act
    const fetchPromise = getState().fetchEmployees();

    // Assert initial loading state
    expect(getState().loading).toBe(true);
    expect(getState().error).toBe(null);

    await fetchPromise;

    // Assert final state
    expect(getState().loading).toBe(false);
    expect(getState().employees).toEqual(mockEmployees);
    expect(getState().error).toBe(null);
    expect(employeeRepository.getAll).toHaveBeenCalledTimes(1);
  });

  it('should set loading to true then false, and set error on failed fetch', async () => {
    // Arrange
    const errorMessage = 'Failed to fetch';
    vi.mocked(employeeRepository.getAll).mockRejectedValue(new Error(errorMessage));
    const { getState } = useEmployeesStore;

    // Act
    await getState().fetchEmployees();

    // Assert final state
    expect(getState().loading).toBe(false);
    expect(getState().employees).toEqual([]);
    expect(getState().error).toBe(errorMessage);
    expect(employeeRepository.getAll).toHaveBeenCalledTimes(1);
  });
}); 