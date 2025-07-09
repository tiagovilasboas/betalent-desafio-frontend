// Camada de Infraestrutura - Responsabilidade: comunicação HTTP
// Dependency Rule: Esta camada é a mais externa

import { apiClient } from '../../../api/apiClient'
import type { Employee } from '../types/employee'

export const employeeApi = {
  // SRP: Responsabilidade única - buscar todos os colaboradores
  async getAllEmployees(): Promise<Employee[]> {
    try {
      return await apiClient.get<Employee[]>('/employees')
    } catch (error) {
      console.error('Erro ao buscar colaboradores:', error)
      // Re-lança o erro com uma mensagem de contexto específico para a feature
      throw new Error('Falha ao carregar a lista de colaboradores.')
    }
  },

  // SRP: Responsabilidade única - buscar colaborador por ID
  async getEmployeeById(id: number): Promise<Employee> {
    try {
      return await apiClient.get<Employee>(`/employees/${id}`)
    } catch (error) {
      console.error(`Erro ao buscar o colaborador com ID ${id}:`, error)
      // Re-lança o erro com uma mensagem de contexto específico para a feature
      throw new Error('Falha ao carregar os dados do colaborador.')
    }
  },
}
