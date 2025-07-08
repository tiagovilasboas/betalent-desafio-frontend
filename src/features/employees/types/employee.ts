// Camada de Domínio - Responsabilidade: definir contrato
export interface Employee {
  id: number;
  name: string;
  job: string;
  admission_date: string;
  phone: string;
  image: string;
}

// SRP: Esta interface tem uma única responsabilidade - definir contrato
export interface EmployeeFilters {
  search: string;
}

// SRP: Interface para estado da aplicação
export interface EmployeeState {
  employees: Employee[];
  filteredEmployees: Employee[];
  loading: boolean;
  error: string | null;
  filters: EmployeeFilters;
  
  // Métodos de leitura
  fetchEmployees: () => Promise<void>;
  
  // Métodos de escrita
  createEmployee: (employee: Omit<Employee, 'id'>) => Promise<Employee>;
  updateEmployee: (id: number, employee: Partial<Employee>) => Promise<Employee>;
  deleteEmployee: (id: number) => Promise<void>;
  
  // Métodos de filtro
  setFilters: (filters: EmployeeFilters) => void;
  clearFilters: () => void;
  clearError: () => void;
} 