# 📋 Plano de Implementação - Desafio BeTalent

## 🎯 Resumo

Plano simplificado para implementar a solução do [Teste Técnico Front-end da BeTalent](https://github.com/BeMobile/teste-pratico-frontend), seguindo princípios de **Clean Architecture** e **Clean Code**.

### Objetivo
Desenvolver uma interface responsiva que exiba uma tabela de colaboradores com funcionalidade de pesquisa.

### 🏗️ Princípios Aplicados

#### **SRP (Single Responsibility Principle)**
- Cada componente/função tem uma única responsabilidade
- Separação clara entre UI, lógica e dados

#### **Clean Code**
- Nomes descritivos e claros
- Funções pequenas e legíveis
- Código autoexplicativo

#### **Dependency Rule**
- Dependências apontam do exterior para o interior
- UI → Hooks → Services → API

---

## 🚀 Etapas de Implementação

### 1. Setup e Arquitetura (30 min)

#### 1.1 Configurar API
```bash
# Instalar json-server
npm install -g json-server

# Clonar dados
git clone https://github.com/BeMobile/teste-pratico-frontend
cd teste-pratico-frontend

# Executar API
json-server --watch db.json --port 3001
```

#### 1.2 Criar Feature (Seguindo Clean Architecture)
```bash
# Gerar feature employees
npm run plop -- feature
# Responder: employees
```

#### 1.3 Estrutura de Camadas
```
src/features/employees/
├── components/           # Camada de Apresentação
├── api/                  # Camada Externa (Infraestrutura)
├── store/                # Camada de Estado
└── types/                # Camada de Domínio
```

### 2. Domínio e Tipos (30 min)

#### 2.1 Interface Employee (Domínio)
```typescript
// types/employee.ts - Camada de Domínio
interface Employee {
  id: string;
  name: string;
  position: string;
  admissionDate: string;
  phone: string;
  image: string;
}

// SRP: Esta interface tem uma única responsabilidade - definir contrato
```

#### 2.2 Funções de Formatação (Utilitários Puros)
```typescript
// utils/dateFormatter.ts - Função pura, sem dependências externas
export const formatDate = (dateString: string): string => {
  return new Date(dateString).toLocaleDateString('pt-BR');
};

// utils/phoneFormatter.ts - Função pura, sem dependências externas
export const formatPhone = (phone: string): string => {
  const cleaned = phone.replace(/\D/g, '');
  const match = cleaned.match(/^(\d{2})(\d{5})(\d{4})$/);
  return match ? `(${match[1]}) ${match[2]}-${match[3]}` : phone;
};

// SRP: Cada função tem uma única responsabilidade
// Clean Code: Nomes descritivos e funções pequenas
```

### 3. Camada de Serviços (1h)

#### 3.1 API Client (Camada Externa)
```typescript
// api/employeeApi.ts - Camada de Infraestrutura
const API_BASE_URL = 'http://localhost:3001';

export const employeeApi = {
  // SRP: Responsabilidade única - comunicação HTTP
  async getAllEmployees(): Promise<Employee[]> {
    const response = await fetch(`${API_BASE_URL}/employees`);
    return response.json();
  }
};

// Dependency Rule: Esta camada é a mais externa
```

#### 3.2 Store Zustand (Camada de Estado)
```typescript
// store/useEmployeesStore.ts - Camada de Aplicação
export const useEmployeesStore = create<EmployeeState>((set, get) => ({
  employees: [],
  filteredEmployees: [],
  loading: false,
  filters: { search: '' },

  // SRP: Responsabilidade única - buscar dados
  fetchEmployees: async () => {
    set({ loading: true });
    const employees = await employeeApi.getAllEmployees();
    set({ employees, filteredEmployees: employees, loading: false });
  },

  // SRP: Responsabilidade única - filtrar dados
  setFilters: (filters) => {
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

// Dependency Rule: Depende da camada de infraestrutura (API)
```

### 4. Camada de Apresentação (2h)

#### 4.1 Pesquisa (UI Pura)
```typescript
// components/EmployeeSearch.tsx - Camada de Apresentação
export function EmployeeSearch() {
  const { filters, setFilters } = useEmployeesStore();
  
  // SRP: Responsabilidade única - capturar input do usuário
  return (
    <TextInput
      placeholder="Pesquisar por nome, cargo ou telefone..."
      value={filters.search}
      onChange={(e) => setFilters({ ...filters, search: e.target.value })}
      leftSection={<IconSearch size={16} />}
    />
  );
}

// Dependency Rule: Depende da camada de estado
```

#### 4.2 Tabela (UI Pura)
```typescript
// components/EmployeeTable.tsx - Camada de Apresentação
export function EmployeeTable() {
  const { filteredEmployees, loading } = useEmployeesStore();
  
  // SRP: Responsabilidade única - exibir dados em tabela
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

// Dependency Rule: Depende da camada de estado e utilitários
```

#### 4.3 Cards Mobile (UI Pura)
```typescript
// components/EmployeeCard.tsx - Camada de Apresentação
export function EmployeeCard() {
  const { filteredEmployees } = useEmployeesStore();
  
  // SRP: Responsabilidade única - exibir dados em cards
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

// Dependency Rule: Depende da camada de estado e utilitários
```

#### 4.4 Componente Principal (Orquestrador)
```typescript
// components/Employees.tsx - Camada de Apresentação
export function Employees() {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const { fetchEmployees, filteredEmployees } = useEmployeesStore();

  useEffect(() => {
    fetchEmployees();
  }, [fetchEmployees]);

  // SRP: Responsabilidade única - orquestrar componentes
  return (
    <Container size="xl" py="xl">
      <Title order={1} mb="lg" ta="center">Colaboradores</Title>
      <EmployeeSearch />
      {isMobile ? <EmployeeCard /> : <EmployeeTable />}
    </Container>
  );
}

// Dependency Rule: Depende da camada de estado e outros componentes
```

### 5. Integração e Polimento (1h)

- Conectar camadas seguindo Dependency Rule
- Estados de loading
- Mensagens de erro
- Responsividade
- Testes básicos

### 6. Documentação (30 min)

- Atualizar README
- Documentar arquitetura
- Screenshots da interface

---

## 📅 Cronograma

| Etapa | Duração | Descrição |
|-------|---------|-----------|
| 1 | 30min | Setup e arquitetura |
| 2 | 30min | Domínio e tipos |
| 3 | 1h | Camada de serviços |
| 4 | 2h | Camada de apresentação |
| 5 | 1h | Integração e polimento |
| 6 | 30min | Documentação |

**Total: 5-6 horas**

---

## 🎯 Critérios de Sucesso

- ✅ Tabela exibe dados corretamente
- ✅ Pesquisa funciona (nome, cargo, telefone)
- ✅ Layout responsivo (desktop/mobile)
- ✅ Formatação de datas e telefones
- ✅ Código limpo e bem estruturado (SRP + Clean Code)
- ✅ Arquitetura em camadas (Dependency Rule)
- ✅ README completo

---

## 🏗️ Benefícios da Arquitetura

### **Testabilidade**
- Componentes UI podem ser testados isoladamente
- Lógica de negócio independente de frameworks
- Fácil mock de dependências

### **Manutenibilidade**
- Mudanças em uma camada não afetam outras
- Código organizado e previsível
- Responsabilidades bem definidas

### **Escalabilidade**
- Fácil adicionar novas funcionalidades
- Reutilização de componentes
- Arquitetura preparada para crescimento

---

*Plano focado em Clean Architecture e princípios de qualidade.* 