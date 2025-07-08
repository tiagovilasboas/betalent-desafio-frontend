// Camada de Estado - Responsabilidade: gerenciar estado da aplicação
// Dependency Rule: Depende da camada de repository

import { create } from 'zustand';

import { employeeRepository } from '../repository/EmployeeRepository';
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
      const employees = await employeeRepository.getAll();
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

  // SRP: Responsabilidade única - criar colaborador
  createEmployee: async (employee: Omit<Employee, 'id'>) => {
    set({ loading: true, error: null });
    
    try {
      const newEmployee = await employeeRepository.create(employee);
      const { employees } = get();
      const updatedEmployees = [...employees, newEmployee];
      
      set({ 
        employees: updatedEmployees, 
        filteredEmployees: updatedEmployees,
        loading: false 
      });
      
      return newEmployee;
    } catch (error) {
      set({ 
        error: error instanceof Error ? error.message : 'Erro desconhecido',
        loading: false 
      });
      throw error;
    }
  },

  // SRP: Responsabilidade única - atualizar colaborador
  updateEmployee: async (id: number, employee: Partial<Employee>) => {
    set({ loading: true, error: null });
    
    try {
      const updatedEmployee = await employeeRepository.update(id, employee);
      const { employees } = get();
      const updatedEmployees = employees.map(emp => 
        emp.id === id ? { ...emp, ...updatedEmployee } : emp
      );
      
      set({ 
        employees: updatedEmployees, 
        filteredEmployees: updatedEmployees,
        loading: false 
      });
      
      return updatedEmployee;
    } catch (error) {
      set({ 
        error: error instanceof Error ? error.message : 'Erro desconhecido',
        loading: false 
      });
      throw error;
    }
  },

  // SRP: Responsabilidade única - deletar colaborador
  deleteEmployee: async (id: number) => {
    set({ loading: true, error: null });
    
    try {
      await employeeRepository.delete(id);
      const { employees } = get();
      const updatedEmployees = employees.filter(emp => emp.id !== id);
      
      set({ 
        employees: updatedEmployees, 
        filteredEmployees: updatedEmployees,
        loading: false 
      });
    } catch (error) {
      set({ 
        error: error instanceof Error ? error.message : 'Erro desconhecido',
        loading: false 
      });
      throw error;
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