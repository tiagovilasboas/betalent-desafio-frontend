import { describe, expect, it } from 'vitest';

import {
  formatCurrency,
  formatDate,
  formatJob,
  formatPhone,
} from './formatters';

describe('formatters', () => {
  describe('formatDate', () => {
    it('should format an ISO date string to pt-BR locale', () => {
      const isoDate = '2024-07-10T12:00:00.000Z';
      expect(formatDate(isoDate)).toBe('10/07/2024');
    });
  });

  describe('formatPhone', () => {
    it('should format a 13-digit phone number correctly', () => {
      const phone = '5511987654321';
      expect(formatPhone(phone)).toBe('+55 (11) 98765-4321');
    });

    it('should format an 11-digit phone number, adding the country code', () => {
      const phone = '11987654321';
      expect(formatPhone(phone)).toBe('+55 (11) 98765-4321');
    });

    it('should return the original string if the format is unknown', () => {
      const phone = '12345';
      expect(formatPhone(phone)).toBe('12345');
    });

    it('should handle non-digit characters gracefully', () => {
      const phone = '+55 (11) 98765-4321';
      expect(formatPhone(phone)).toBe('+55 (11) 98765-4321');
    });
  });

  describe('formatJob', () => {
    it('should capitalize the first letter and lowercase the rest', () => {
      const job = 'DEVELOPER';
      expect(formatJob(job)).toBe('Developer');
    });

    it('should handle an already formatted string', () => {
      const job = 'Manager';
      expect(formatJob(job)).toBe('Manager');
    });
  });

  describe('formatCurrency', () => {
    it('should format a number into BRL currency format', () => {
      const value = 5000.75;
      // O vitest/node pode usar um non-breaking space (NBSP), então usamos uma regex
      expect(formatCurrency(value)).toMatch(/R\$\s*5\.000,75/);
    });

    it('should format an integer value correctly', () => {
      const value = 1200;
      expect(formatCurrency(value)).toMatch(/R\$\s*1\.200,00/);
    });
  });
}); 