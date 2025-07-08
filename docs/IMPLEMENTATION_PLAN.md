# 📋 Plano de Implementação - Desafio BeTalent

## 🎯 Resumo

Plano simplificado para implementar a solução do [Teste Técnico Front-end da BeTalent](https://github.com/BeMobile/teste-pratico-frontend).

### Objetivo
Desenvolver uma interface responsiva que exiba uma tabela de colaboradores com funcionalidade de pesquisa.

---

## 🚀 Etapas de Implementação

### 1. Setup (30 min)

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

#### 1.2 Criar Feature
```bash
# Gerar feature employees
npm run plop -- feature
# Responder: employees
```

### 2. Tipos e Utilitários (30 min)

#### 2.1 Interface Employee
```typescript
interface Employee {
  id: string;
  name: string;
  position: string;
  admissionDate: string;
  phone: string;
  image: string;
}
```

#### 2.2 Funções de Formatação
```typescript
// utils/dateFormatter.ts
export const formatDate = (dateString: string): string => {
  return new Date(dateString).toLocaleDateString('pt-BR');
};

// utils/phoneFormatter.ts
export const formatPhone = (phone: string): string => {
  const cleaned = phone.replace(/\D/g, '');
  const match = cleaned.match(/^(\d{2})(\d{5})(\d{4})$/);
  return match ? `(${match[1]}) ${match[2]}-${match[3]}` : phone;
};
```

### 3. API e Estado (1h)

#### 3.1 API Client
```typescript
const API_BASE_URL = 'http://localhost:3001';

export const employeeApi = {
  async getAllEmployees(): Promise<Employee[]> {
    const response = await fetch(`${API_BASE_URL}/employees`);
    return response.json();
  }
};
```

#### 3.2 Store Zustand
```typescript
export const useEmployeesStore = create<EmployeeState>((set, get) => ({
  employees: [],
  filteredEmployees: [],
  loading: false,
  filters: { search: '' },

  fetchEmployees: async () => {
    set({ loading: true });
    const employees = await employeeApi.getAllEmployees();
    set({ employees, filteredEmployees: employees, loading: false });
  },

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
```

### 4. Componentes (2h)

#### 4.1 Pesquisa
```typescript
export function EmployeeSearch() {
  const { filters, setFilters } = useEmployeesStore();
  
  return (
    <TextInput
      placeholder="Pesquisar por nome, cargo ou telefone..."
      value={filters.search}
      onChange={(e) => setFilters({ ...filters, search: e.target.value })}
      leftSection={<IconSearch size={16} />}
    />
  );
}
```

#### 4.2 Tabela
```typescript
export function EmployeeTable() {
  const { filteredEmployees, loading } = useEmployeesStore();
  
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

#### 4.3 Cards Mobile
```typescript
export function EmployeeCard() {
  const { filteredEmployees } = useEmployeesStore();
  
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

#### 4.4 Componente Principal
```typescript
export function Employees() {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const { fetchEmployees, filteredEmployees } = useEmployeesStore();

  useEffect(() => {
    fetchEmployees();
  }, [fetchEmployees]);

  return (
    <Container size="xl" py="xl">
      <Title order={1} mb="lg" ta="center">Colaboradores</Title>
      <EmployeeSearch />
      {isMobile ? <EmployeeCard /> : <EmployeeTable />}
    </Container>
  );
}
```

### 5. Polimento (1h)

- Estados de loading
- Mensagens de erro
- Responsividade
- Testes básicos

### 6. Documentação (30 min)

- Atualizar README
- Screenshots da interface

---

## 📅 Cronograma

| Etapa | Duração | Descrição |
|-------|---------|-----------|
| 1 | 30min | Setup inicial |
| 2 | 30min | Tipos e utilitários |
| 3 | 1h | API e estado |
| 4 | 2h | Componentes |
| 5 | 1h | Polimento |
| 6 | 30min | Documentação |

**Total: 5-6 horas**

---

## 🎯 Critérios de Sucesso

- ✅ Tabela exibe dados corretamente
- ✅ Pesquisa funciona (nome, cargo, telefone)
- ✅ Layout responsivo (desktop/mobile)
- ✅ Formatação de datas e telefones
- ✅ Código limpo e bem estruturado
- ✅ README completo

---

*Plano simplificado focado no essencial.* 