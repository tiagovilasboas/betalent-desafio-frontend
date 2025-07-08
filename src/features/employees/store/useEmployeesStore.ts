// Camada de Estado - Responsabilidade: gerenciar estado da aplicação
// Dependency Rule: Depende da camada de repository

import { create } from 'zustand';

import { employeeRepository } from '../repository/EmployeeRepository';
import type { Employee, EmployeeFilters, EmployeeState } from '../types/employee';
import { sortData } from '../utils/sorting';

export const ITEMS_PER_PAGE = 10;

export const useEmployeesStore = create<EmployeeState>((set, get) => ({
  employees: [],
  processedEmployees: [],
  loading: false,
  error: null,
  filters: { search: '' },
  sortKey: '',
  sortOrder: 'asc',
  currentPage: 1,
  totalPages: 0,

  fetchEmployees: async () => {
    set({ loading: true, error: null });
    try {
      const employees = await employeeRepository.getAll();
      set({
        employees,
        processedEmployees: employees,
        loading: false,
        totalPages: Math.ceil(employees.length / ITEMS_PER_PAGE),
        currentPage: 1,
      });
    } catch (error) {
      set({
        error: error instanceof Error ? error.message : 'Erro desconhecido',
        loading: false,
      });
    }
  },

  createEmployee: async (employee: Omit<Employee, 'id'>) => {
    set({ loading: true, error: null });
    
    try {
      const newEmployee = await employeeRepository.create(employee);
      const { employees } = get();
      const updatedEmployees = [...employees, newEmployee];
      
      set({ 
        employees: updatedEmployees, 
        processedEmployees: updatedEmployees,
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
        processedEmployees: updatedEmployees,
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

  deleteEmployee: async (id: number) => {
    set({ loading: true, error: null });
    
    try {
      await employeeRepository.delete(id);
      const { employees } = get();
      const updatedEmployees = employees.filter(emp => emp.id !== id);
      
      set({ 
        employees: updatedEmployees, 
        processedEmployees: updatedEmployees,
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

  setFilters: (filters: EmployeeFilters) => {
    const { employees, sortKey, sortOrder } = get();
    const search = filters.search.toLowerCase();

    const filtered = employees.filter(
      (employee) =>
        employee.name.toLowerCase().includes(search) ||
        employee.job.toLowerCase().includes(search) ||
        employee.phone.includes(search),
    );

    const sorted = sortData(filtered, sortKey, sortOrder);

    set({
      filters,
      processedEmployees: sorted,
      totalPages: Math.ceil(sorted.length / ITEMS_PER_PAGE),
      currentPage: 1,
    });
  },

  setSorting: (key: keyof Employee) => {
    const { sortKey, sortOrder, processedEmployees } = get();
    const newSortOrder = sortKey === key && sortOrder === 'asc' ? 'desc' : 'asc';
    
    const sortedEmployees = sortData(processedEmployees, key, newSortOrder);

    set({
      sortKey: key,
      sortOrder: newSortOrder,
      processedEmployees: sortedEmployees,
      currentPage: 1,
    });
  },

  setPage: (page: number) => {
    set({ currentPage: page });
  },

  clearFilters: () => {
    const { employees } = get();
    set({
      filters: { search: '' },
      processedEmployees: employees,
      totalPages: Math.ceil(employees.length / ITEMS_PER_PAGE),
      currentPage: 1,
    });
  },

  clearError: () => {
    set({ error: null });
  },
}));

// Seletor para obter os dados processados (filtrados e ordenados)
export const selectProcessedEmployees = (state: EmployeeState) =>
  state.processedEmployees; 