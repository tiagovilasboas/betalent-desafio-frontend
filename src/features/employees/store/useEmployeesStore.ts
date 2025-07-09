// Camada de Estado - Responsabilidade: gerenciar estado da aplicação
// Dependency Rule: Depende da camada de repository

import { create } from 'zustand';

import { employeeRepository } from '../repository/EmployeeRepository';
import type { Employee } from '../types/employee';

interface EmployeeState {
  employees: Employee[];
  loading: boolean;
  error: string | null;
  fetchEmployees: () => Promise<void>;
}

export const useEmployeesStore = create<EmployeeState>((set) => ({
  employees: [],
  loading: false,
  error: null,

  fetchEmployees: async () => {
    set({ loading: true, error: null });
    try {
      const employees = await employeeRepository.getAll();
      set({
        employees,
        loading: false,
      });
    } catch (error) {
      set({
        error: error instanceof Error ? error.message : 'Unknown error',
        loading: false,
      });
    }
  },
})); 