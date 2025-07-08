// Camada de Infraestrutura - Responsabilidade: comunicação HTTP
// Dependency Rule: Esta camada é a mais externa

import type { Employee } from '../types/employee';

const API_BASE_URL = 'http://localhost:3001';

export const employeeApi = {
  // SRP: Responsabilidade única - buscar todos os colaboradores
  async getAllEmployees(): Promise<Employee[]> {
    try {
      const response = await fetch(`${API_BASE_URL}/employees`);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      return response.json();
    } catch (error) {
      console.error('Erro ao buscar colaboradores:', error);
      throw new Error('Falha ao carregar colaboradores');
    }
  },

  // SRP: Responsabilidade única - buscar colaborador por ID
  async getEmployeeById(id: number): Promise<Employee> {
    try {
      const response = await fetch(`${API_BASE_URL}/employees/${id}`);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      return response.json();
    } catch (error) {
      console.error(`Erro ao buscar colaborador ${id}:`, error);
      throw new Error('Falha ao carregar colaborador');
    }
  }
}; 