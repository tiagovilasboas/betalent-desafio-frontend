# 📋 Plano de Implementação - Desafio BeTalent

## 🎯 Resumo Executivo

Este documento apresenta um plano detalhado para implementar a solução do desafio front-end da BeTalent, utilizando o boilerplate React + Vite existente.

### Objetivo Principal
Desenvolver uma interface responsiva que exiba uma tabela de colaboradores com funcionalidade de pesquisa, seguindo os requisitos especificados.

---

## 🚀 Etapa 1: Setup Inicial (1-2 horas)

### 1.1 Configuração da API Simulada
```bash
# Instalar json-server globalmente
npm install -g json-server

# Ou como dependência de desenvolvimento
npm install --save-dev json-server

# Clonar repositório de dados
git clone https://github.com/BeMobile/desafio-front-end
cd desafio-front-end

# Executar json-server
json-server --watch db.json --port 3001
```

### 1.2 Adicionar Script no package.json
```json
{
  "scripts": {
    "api": "json-server --watch ./data/db.json --port 3001"
  }
}
```

### 1.3 Estrutura de Dados Esperada
```typescript
// Estrutura esperada dos dados da API
interface Employee {
  id: string;
  name: string;
  position: string;
  admissionDate: string; // formato: "2023-01-15"
  phone: string; // formato: "11987654321"
  image: string; // URL da imagem
}
```

---

## 🏗️ Etapa 2: Criação da Feature (30 min)

### 2.1 Usar Gerador Plop
```bash
# Gerar feature employees
npm run plop -- feature
# Responder: employees
```

### 2.2 Estrutura Gerada
```
src/features/employees/
├── components/
│   └── Employees.tsx
├── api/
│   └── employeesApi.ts
└── store/
    └── useEmployeesStore.ts
```

---

## 🎨 Etapa 3: Implementação dos Tipos (30 min)

### 3.1 Criar types/employee.ts
```typescript
export interface Employee {
  id: string;
  name: string;
  position: string;
  admissionDate: string;
  phone: string;
  image: string;
}

export interface EmployeeFilters {
  search: string;
  position?: string;
}

export interface EmployeeState {
  employees: Employee[];
  filteredEmployees: Employee[];
  loading: boolean;
  error: string | null;
  filters: EmployeeFilters;
}
```

### 3.2 Utilitários de Formatação
```typescript
// utils/dateFormatter.ts
export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString('pt-BR');
};

// utils/phoneFormatter.ts
export const formatPhone = (phone: string): string => {
  const cleaned = phone.replace(/\D/g, '');
  const match = cleaned.match(/^(\d{2})(\d{5})(\d{4})$/);
  if (match) {
    return `(${match[1]}) ${match[2]}-${match[3]}`;
  }
  return phone;
};
```

---

## 🔌 Etapa 4: API e Serviços (1 hora)

### 4.1 Implementar employeesApi.ts
```typescript
const API_BASE_URL = 'http://localhost:3001';

export const employeeApi = {
  async getAllEmployees(): Promise<Employee[]> {
    try {
      const response = await fetch(`${API_BASE_URL}/employees`);
      if (!response.ok) {
        throw new Error('Falha ao buscar colaboradores');
      }
      return response.json();
    } catch (error) {
      console.error('Erro na API:', error);
      throw error;
    }
  },

  async searchEmployees(query: string): Promise<Employee[]> {
    try {
      const response = await fetch(
        `${API_BASE_URL}/employees?q=${encodeURIComponent(query)}`
      );
      if (!response.ok) {
        throw new Error('Falha na pesquisa');
      }
      return response.json();
    } catch (error) {
      console.error('Erro na pesquisa:', error);
      throw error;
    }
  }
};
```

### 4.2 Store com Zustand
```typescript
import { create } from 'zustand';
import { EmployeeState, EmployeeFilters } from '../types/employee';
import { employeeApi } from '../api/employeesApi';

export const useEmployeesStore = create<EmployeeState>((set, get) => ({
  employees: [],
  filteredEmployees: [],
  loading: false,
  error: null,
  filters: { search: '' },

  fetchEmployees: async () => {
    set({ loading: true, error: null });
    try {
      const employees = await employeeApi.getAllEmployees();
      set({ employees, filteredEmployees: employees, loading: false });
    } catch (error) {
      set({ error: 'Erro ao carregar colaboradores', loading: false });
    }
  },

  setFilters: (filters: EmployeeFilters) => {
    const { employees } = get();
    const filtered = employees.filter(employee => {
      const search = filters.search.toLowerCase();
      return (
        employee.name.toLowerCase().includes(search) ||
        employee.position.toLowerCase().includes(search) ||
        employee.phone.includes(search)
      );
    });
    set({ filters, filteredEmployees: filtered });
  }
}));
```

---

## 🧩 Etapa 5: Componentes da Interface (2-3 horas)

### 5.1 Componente de Pesquisa
```typescript
// components/EmployeeSearch.tsx
import { TextInput, Group } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';
import { useEmployeesStore } from '../store/useEmployeesStore';
import { useDebouncedValue } from '@mantine/hooks';

export function EmployeeSearch() {
  const { filters, setFilters } = useEmployeesStore();
  const [debouncedSearch] = useDebouncedValue(filters.search, 300);

  const handleSearchChange = (value: string) => {
    setFilters({ ...filters, search: value });
  };

  return (
    <Group justify="center" mb="md">
      <TextInput
        placeholder="Pesquisar por nome, cargo ou telefone..."
        value={filters.search}
        onChange={(e) => handleSearchChange(e.target.value)}
        leftSection={<IconSearch size={16} />}
        style={{ width: '100%', maxWidth: 400 }}
      />
    </Group>
  );
}
```

### 5.2 Tabela de Colaboradores
```typescript
// components/EmployeeTable.tsx
import { Table, Avatar, Text, Group, LoadingOverlay } from '@mantine/core';
import { useEmployeesStore } from '../store/useEmployeesStore';
import { formatDate, formatPhone } from '../utils';

export function EmployeeTable() {
  const { filteredEmployees, loading } = useEmployeesStore();

  if (loading) {
    return <LoadingOverlay visible />;
  }

  return (
    <Table>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>Colaborador</Table.Th>
          <Table.Th>Cargo</Table.Th>
          <Table.Th>Data de Admissão</Table.Th>
          <Table.Th>Telefone</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>
        {filteredEmployees.map((employee) => (
          <Table.Tr key={employee.id}>
            <Table.Td>
              <Group>
                <Avatar src={employee.image} size="md" />
                <Text fw={500}>{employee.name}</Text>
              </Group>
            </Table.Td>
            <Table.Td>{employee.position}</Table.Td>
            <Table.Td>{formatDate(employee.admissionDate)}</Table.Td>
            <Table.Td>{formatPhone(employee.phone)}</Table.Td>
          </Table.Tr>
        ))}
      </Table.Tbody>
    </Table>
  );
}
```

### 5.3 Cards para Mobile
```typescript
// components/EmployeeCard.tsx
import { Card, Avatar, Text, Group, Stack } from '@mantine/core';
import { useEmployeesStore } from '../store/useEmployeesStore';
import { formatDate, formatPhone } from '../utils';

export function EmployeeCard() {
  const { filteredEmployees, loading } = useEmployeesStore();

  if (loading) {
    return <div>Carregando...</div>;
  }

  return (
    <Stack gap="md">
      {filteredEmployees.map((employee) => (
        <Card key={employee.id} shadow="sm" padding="lg">
          <Group>
            <Avatar src={employee.image} size="lg" />
            <Stack gap="xs" style={{ flex: 1 }}>
              <Text fw={500} size="lg">{employee.name}</Text>
              <Text c="dimmed">{employee.position}</Text>
              <Text size="sm">Admissão: {formatDate(employee.admissionDate)}</Text>
              <Text size="sm">Tel: {formatPhone(employee.phone)}</Text>
            </Stack>
          </Group>
        </Card>
      ))}
    </Stack>
  );
}
```

---

## 📱 Etapa 6: Layout Responsivo (1 hora)

### 6.1 Componente Principal
```typescript
// components/Employees.tsx
import { Container, Title, Text } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { EmployeeSearch } from './EmployeeSearch';
import { EmployeeTable } from './EmployeeTable';
import { EmployeeCard } from './EmployeeCard';
import { useEmployeesStore } from '../store/useEmployeesStore';
import { useEffect } from 'react';

export function Employees() {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const { fetchEmployees, filteredEmployees, error } = useEmployeesStore();

  useEffect(() => {
    fetchEmployees();
  }, [fetchEmployees]);

  return (
    <Container size="xl" py="xl">
      <Title order={1} mb="lg" ta="center">
        Colaboradores
      </Title>
      
      <EmployeeSearch />
      
      {error && (
        <Text c="red" ta="center" mb="md">
          {error}
        </Text>
      )}
      
      {filteredEmployees.length === 0 && !error ? (
        <Text ta="center" c="dimmed">
          Nenhum colaborador encontrado
        </Text>
      ) : (
        isMobile ? <EmployeeCard /> : <EmployeeTable />
      )}
    </Container>
  );
}
```

---

## 🎨 Etapa 7: Estilização e Polimento (1-2 horas)

### 7.1 Melhorias Visuais
- Adicionar loading states mais elegantes
- Implementar animações de transição
- Melhorar espaçamentos e tipografia
- Adicionar estados vazios mais informativos

### 7.2 Acessibilidade
- Adicionar ARIA labels
- Implementar navegação por teclado
- Verificar contraste de cores
- Adicionar alt text para imagens

---

## 🧪 Etapa 8: Testes (1-2 horas)

### 8.1 Testes Unitários
```typescript
// utils/__tests__/dateFormatter.test.ts
import { formatDate } from '../dateFormatter';

describe('formatDate', () => {
  it('should format date correctly', () => {
    expect(formatDate('2023-01-15')).toBe('15/01/2023');
  });
});

// utils/__tests__/phoneFormatter.test.ts
import { formatPhone } from '../phoneFormatter';

describe('formatPhone', () => {
  it('should format phone correctly', () => {
    expect(formatPhone('11987654321')).toBe('(11) 98765-4321');
  });
});
```

### 8.2 Testes de Componentes
```typescript
// components/__tests__/EmployeeSearch.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import { EmployeeSearch } from '../EmployeeSearch';

describe('EmployeeSearch', () => {
  it('should render search input', () => {
    render(<EmployeeSearch />);
    expect(screen.getByPlaceholderText(/pesquisar/i)).toBeInTheDocument();
  });
});
```

---

## 📚 Etapa 9: Documentação (30 min)

### 9.1 Atualizar README
- Adicionar seção sobre o desafio
- Incluir instruções de instalação
- Documentar funcionalidades
- Adicionar screenshots

### 9.2 Comentários no Código
- Adicionar JSDoc nos componentes principais
- Documentar funções complexas
- Explicar lógica de negócio

---

## 🚀 Cronograma Detalhado

| Etapa | Duração | Prioridade | Dependências |
|-------|---------|------------|--------------|
| 1 | 1-2h | Alta | - |
| 2 | 30min | Alta | Etapa 1 |
| 3 | 30min | Alta | Etapa 2 |
| 4 | 1h | Alta | Etapa 3 |
| 5 | 2-3h | Alta | Etapa 4 |
| 6 | 1h | Alta | Etapa 5 |
| 7 | 1-2h | Média | Etapa 6 |
| 8 | 1-2h | Média | Etapa 7 |
| 9 | 30min | Baixa | Todas |

**Total: 8-12 horas**

---

## 🎯 Critérios de Sucesso

### Funcionalidades
- [ ] Tabela exibe todos os dados corretamente
- [ ] Pesquisa funciona para nome, cargo e telefone
- [ ] Layout responsivo (desktop e mobile)
- [ ] Formatação adequada de datas e telefones

### Qualidade
- [ ] Código limpo e bem estruturado
- [ ] Testes implementados
- [ ] Documentação completa
- [ ] Performance otimizada

### UX/UI
- [ ] Interface intuitiva
- [ ] Loading states adequados
- [ ] Feedback visual para ações
- [ ] Acessibilidade implementada

---

## 🛠️ Comandos Úteis

```bash
# Desenvolvimento
npm run dev               # Frontend
npm run api               # API simulada

# Qualidade de código
npm run lint              # Verificar código
npm run format            # Formatar código
npm run type-check        # Verificar tipos

# Testes
npm run test              # Executar testes
npm run test:watch        # Testes em modo watch

# Build
npm run build             # Build de produção
npm run preview           # Preview do build
```

---

*Este plano será atualizado conforme o desenvolvimento avança.* 