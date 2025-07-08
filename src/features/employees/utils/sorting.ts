import { Employee } from '../types/employee';

export function sortData(
  data: Employee[],
  sortKey: keyof Employee | '',
  sortOrder: 'asc' | 'desc',
): Employee[] {
  if (!sortKey) {
    return data;
  }

  const sortedData = [...data].sort((a, b) => {
    const valA = a[sortKey];
    const valB = b[sortKey];

    // Lógica para datas
    if (sortKey === 'admission_date') {
      return sortOrder === 'asc'
        ? new Date(valA).getTime() - new Date(valB).getTime()
        : new Date(valB).getTime() - new Date(valA).getTime();
    }

    // Lógica para strings
    if (typeof valA === 'string' && typeof valB === 'string') {
      return sortOrder === 'asc'
        ? valA.localeCompare(valB)
        : valB.localeCompare(valA);
    }

    return 0;
  });

  return sortedData;
} 