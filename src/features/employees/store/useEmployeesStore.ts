// Camada de Estado - Responsabilidade: gerenciar estado da aplicação
// Dependency Rule: Depende da camada de infraestrutura (API)

import { create } from 'zustand';

import { employeeApi } from '../api/employeeApi';
import type { Employee, EmployeeFilters, EmployeeState } from '../types/employee';

export const useEmployeesStore = create<EmployeeState>((set, get) => ({
  employees: [],
  filteredEmployees: [],
  loading: false,
  error: null,
  filters: { search: '' },

  // SRP: Responsabilidade única - buscar dados
  fetchEmployees: async () => {
    set({ loading: true, error: null });
    
    try {
      const employees = await employeeApi.getAllEmployees();
      set({ 
        employees, 
        filteredEmployees: employees, 
        loading: false 
      });
    } catch (error) {
      set({ 
        error: error instanceof Error ? error.message : 'Erro desconhecido',
        loading: false 
      });
    }
  },

  // SRP: Responsabilidade única - filtrar dados
  setFilters: (filters: EmployeeFilters) => {
    const { employees } = get();
    
    const filtered = employees.filter((employee: Employee) => {
      const search = filters.search.toLowerCase();
      return (
        employee.name.toLowerCase().includes(search) ||
        employee.job.toLowerCase().includes(search) ||
        employee.phone.includes(search)
      );
    });
    
    set({ filters, filteredEmployees: filtered });
  },

  // SRP: Responsabilidade única - limpar filtros
  clearFilters: () => {
    const { employees } = get();
    set({ 
      filters: { search: '' }, 
      filteredEmployees: employees 
    });
  },

  // SRP: Responsabilidade única - limpar erro
  clearError: () => {
    set({ error: null });
  }
})); 