// Camada de Repository - Responsabilidade: abstrair acesso a dados
// Dependency Rule: Depende da camada de infraestrutura (API)

import type { Employee } from '../types/employee';

// Interface do Repository (contrato)
export interface IEmployeeRepository {
  getAll(): Promise<Employee[]>;
  getById(id: number): Promise<Employee>;
  create(employee: Omit<Employee, 'id'>): Promise<Employee>;
  update(id: number, employee: Partial<Employee>): Promise<Employee>;
  delete(id: number): Promise<void>;
}

// Implementação concreta do Repository
export class EmployeeRepository implements IEmployeeRepository {
  private baseUrl: string;

  constructor(baseUrl?: string) {
    // If a baseUrl is explicitly provided, use it. Otherwise, decide based on environment.
    if (baseUrl) {
      this.baseUrl = baseUrl
    } else {
      const isLocalhost =
        typeof window !== 'undefined' &&
        (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1')

      this.baseUrl = isLocalhost ? 'http://localhost:3001' : '/api'
    }
  }

  // SRP: Responsabilidade única - buscar todos os colaboradores
  async getAll(): Promise<Employee[]> {
    try {
      const response = await fetch(`${this.baseUrl}/employees`);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      return response.json();
    } catch (error) {
      console.error('Erro ao buscar colaboradores:', error);
      throw new Error('Falha ao carregar colaboradores');
    }
  }

  // SRP: Responsabilidade única - buscar colaborador por ID
  async getById(id: number): Promise<Employee> {
    try {
      const response = await fetch(`${this.baseUrl}/employees/${id}`);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      return response.json();
    } catch (error) {
      console.error(`Erro ao buscar colaborador ${id}:`, error);
      throw new Error('Falha ao carregar colaborador');
    }
  }

  // SRP: Responsabilidade única - criar novo colaborador
  async create(employee: Omit<Employee, 'id'>): Promise<Employee> {
    try {
      const response = await fetch(`${this.baseUrl}/employees`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(employee),
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      return response.json();
    } catch (error) {
      console.error('Erro ao criar colaborador:', error);
      throw new Error('Falha ao criar colaborador');
    }
  }

  // SRP: Responsabilidade única - atualizar colaborador
  async update(id: number, employee: Partial<Employee>): Promise<Employee> {
    try {
      const response = await fetch(`${this.baseUrl}/employees/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(employee),
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      return response.json();
    } catch (error) {
      console.error(`Erro ao atualizar colaborador ${id}:`, error);
      throw new Error('Falha ao atualizar colaborador');
    }
  }

  // SRP: Responsabilidade única - deletar colaborador
  async delete(id: number): Promise<void> {
    try {
      const response = await fetch(`${this.baseUrl}/employees/${id}`, {
        method: 'DELETE',
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
    } catch (error) {
      console.error(`Erro ao deletar colaborador ${id}:`, error);
      throw new Error('Falha ao deletar colaborador');
    }
  }
}

// Instância singleton do repository
export const employeeRepository = new EmployeeRepository(); 