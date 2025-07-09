import { afterEach, describe, expect, it, vi } from 'vitest';

import { Employee } from '../types/employee';
import { EmployeeRepository } from './EmployeeRepository';

const mockEmployees: Employee[] = [
  { id: 1, name: 'Alice', job: 'Manager', admission_date: '2021-01-01', phone: '222', image: '' },
  { id: 2, name: 'Bob', job: 'Designer', admission_date: '2023-01-01', phone: '333', image: '' },
];

describe('EmployeeRepository', () => {
  const repository = new EmployeeRepository('http://test.com');

  afterEach(() => {
    vi.restoreAllMocks();
  });

  describe('getAll', () => {
    it('should fetch and return all employees on success', async () => {
      // Arrange
      const mockResponse = {
        ok: true,
        json: async () => mockEmployees,
      } as Response;
      vi.spyOn(global, 'fetch').mockResolvedValue(mockResponse);

      // Act
      const employees = await repository.getAll();

      // Assert
      expect(global.fetch).toHaveBeenCalledWith('http://test.com/employees');
      expect(employees).toEqual(mockEmployees);
    });

    it('should throw a specific error on fetch failure', async () => {
      // Arrange
      const mockResponse = {
        ok: false,
        status: 500,
      } as Response;
      vi.spyOn(global, 'fetch').mockResolvedValue(mockResponse);

      // Act & Assert
      await expect(repository.getAll()).rejects.toThrow('Falha ao carregar colaboradores');
      expect(global.fetch).toHaveBeenCalledWith('http://test.com/employees');
    });

    it('should throw a specific error on network or other errors', async () => {
      // Arrange
      vi.spyOn(global, 'fetch').mockRejectedValue(new Error('Network error'));

      // Act & Assert
      await expect(repository.getAll()).rejects.toThrow('Falha ao carregar colaboradores');
    });
  });

  describe('getById', () => {
    it('should fetch and return a single employee on success', async () => {
      const mockResponse = { ok: true, json: async () => mockEmployees[0] } as Response;
      vi.spyOn(global, 'fetch').mockResolvedValue(mockResponse);

      const employee = await repository.getById(1);

      expect(global.fetch).toHaveBeenCalledWith('http://test.com/employees/1');
      expect(employee).toEqual(mockEmployees[0]);
    });

    it('should throw an error on fetch failure', async () => {
      const mockResponse = { ok: false, status: 404 } as Response;
      vi.spyOn(global, 'fetch').mockResolvedValue(mockResponse);

      await expect(repository.getById(99)).rejects.toThrow('Falha ao carregar colaborador');
    });
  });

  describe('create', () => {
    it('should POST and return the new employee on success', async () => {
      const newEmployeeData = { name: 'New Guy', job: 'Intern', admission_date: '2024-01-01', phone: '456', image: '' };
      const createdEmployee = { id: 3, ...newEmployeeData };
      const mockResponse = { ok: true, json: async () => createdEmployee } as Response;
      vi.spyOn(global, 'fetch').mockResolvedValue(mockResponse);

      const employee = await repository.create(newEmployeeData);

      expect(global.fetch).toHaveBeenCalledWith('http://test.com/employees', expect.objectContaining({
        method: 'POST',
        body: JSON.stringify(newEmployeeData),
      }));
      expect(employee).toEqual(createdEmployee);
    });
  });

  describe('update', () => {
    it('should PUT and return the updated employee on success', async () => {
      const updatedData = { job: 'Senior Developer' };
      const updatedEmployee = { ...mockEmployees[0], ...updatedData };
      const mockResponse = { ok: true, json: async () => updatedEmployee } as Response;
      vi.spyOn(global, 'fetch').mockResolvedValue(mockResponse);

      const employee = await repository.update(1, updatedData);

      expect(global.fetch).toHaveBeenCalledWith('http://test.com/employees/1', expect.objectContaining({
        method: 'PUT',
        body: JSON.stringify(updatedData),
      }));
      expect(employee).toEqual(updatedEmployee);
    });
  });

  describe('delete', () => {
    it('should send a DELETE request and resolve on success', async () => {
      const mockResponse = { ok: true } as Response;
      vi.spyOn(global, 'fetch').mockResolvedValue(mockResponse);

      await expect(repository.delete(1)).resolves.toBeUndefined();
      expect(global.fetch).toHaveBeenCalledWith('http://test.com/employees/1', { method: 'DELETE' });
    });
  });
}); 