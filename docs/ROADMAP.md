# 🗺️ Roadmap - Desafio Front-end BeTalent

## 📋 Visão Geral

Roadmap simplificado para implementar a solução do [Teste Técnico Front-end da BeTalent](https://github.com/BeMobile/teste-pratico-frontend).

### 🎯 Objetivos
- Tabela responsiva de colaboradores
- Pesquisa por nome, cargo e telefone
- Layout adaptativo (desktop/mobile)
- Formatação de datas e telefones

---

## 🚀 Fases de Desenvolvimento

### 1. Setup (30 min)
- [ ] Configurar API simulada (json-server)
- [ ] Criar feature `employees` com Plop
- [ ] Testar conexão com API

### 2. Tipos e Utilitários (30 min)
- [ ] Definir interface `Employee`
- [ ] Criar funções de formatação (data/telefone)
- [ ] Implementar tipos para filtros

### 3. API e Estado (1h)
- [ ] Implementar `employeeApi.ts`
- [ ] Criar store com Zustand
- [ ] Implementar lógica de filtros

### 4. Componentes (2h)
- [ ] Componente de pesquisa
- [ ] Tabela de colaboradores (desktop)
- [ ] Cards de colaboradores (mobile)
- [ ] Componente principal responsivo

### 5. Polimento (1h)
- [ ] Estados de loading e erro
- [ ] Ajustes de responsividade
- [ ] Testes básicos

### 6. Documentação (30 min)
- [ ] Atualizar README
- [ ] Screenshots da interface

---

## 📁 Estrutura do Projeto

```
src/features/employees/
├── components/
│   ├── EmployeeTable.tsx
│   ├── EmployeeSearch.tsx
│   ├── EmployeeCard.tsx
│   └── Employees.tsx
├── api/
│   └── employeeApi.ts
├── store/
│   └── useEmployeesStore.ts
└── types/
    └── employee.ts
```

---

## 🎯 Critérios de Avaliação

### ✅ Implementados
- **Lógica de programação**: Código limpo e estruturado
- **Organização**: Arquitetura em camadas
- **CSS/Estilização**: Design responsivo
- **README**: Documentação completa
- **TypeScript**: Tipagem completa (diferencial)

---

## 📅 Cronograma

| Fase | Duração | Descrição |
|------|---------|-----------|
| 1 | 30min | Setup inicial |
| 2 | 30min | Tipos e utilitários |
| 3 | 1h | API e estado |
| 4 | 2h | Componentes |
| 5 | 1h | Polimento |
| 6 | 30min | Documentação |

**Total: 5-6 horas**

---

## 🚀 Próximos Passos

1. Configurar API simulada
2. Criar feature employees
3. Implementar componentes básicos
4. Adicionar responsividade
5. Testar e documentar

---

*Roadmap simplificado focado no essencial do desafio.*
