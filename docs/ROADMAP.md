# 🗺️ Roadmap - Desafio Front-end BeTalent

## 📋 Visão Geral

Roadmap simplificado para implementar a solução do [Teste Técnico Front-end da BeTalent](https://github.com/BeMobile/teste-pratico-frontend), seguindo princípios de **Clean Architecture** e **Clean Code**.

### 🎯 Objetivos
- Tabela responsiva de colaboradores
- Pesquisa por nome, cargo e telefone
- Layout adaptativo (desktop/mobile)
- Formatação de datas e telefones

### 🏗️ Princípios Aplicados

#### **SRP (Single Responsibility Principle)**
- Cada componente tem uma única responsabilidade
- Funções pequenas e focadas
- Separação clara de responsabilidades

#### **Clean Code**
- Nomenclatura clara e descritiva
- Funções pequenas e legíveis
- Evitar duplicação de código
- Código autoexplicativo

#### **Dependency Rule (Clean Architecture)**
- Dependências apontam do exterior para o interior
- UI → Hooks → Services → API
- Lógica de negócio independente de frameworks

---

## 🚀 Fases de Desenvolvimento

### 1. Setup e Arquitetura (30 min)
- [ ] Configurar API simulada (json-server)
- [ ] Criar feature `employees` com Plop
- [ ] Definir estrutura seguindo Dependency Rule
- [ ] Testar conexão com API

### 2. Domínio e Tipos (30 min)
- [ ] Definir interface `Employee` (domínio)
- [ ] Criar funções de formatação (utilitários puros)
- [ ] Implementar tipos para filtros (domínio)
- [ ] Aplicar SRP: cada função tem uma responsabilidade

### 3. Camada de Serviços (1h)
- [ ] Implementar `employeeApi.ts` (camada externa)
- [ ] Criar store com Zustand (camada de estado)
- [ ] Implementar lógica de filtros (camada de domínio)
- [ ] Seguir Dependency Rule: Services → API

### 4. Camada de Apresentação (2h)
- [ ] Componente de pesquisa (UI pura)
- [ ] Tabela de colaboradores (UI pura)
- [ ] Cards de colaboradores (UI pura)
- [ ] Componente principal (orquestrador)
- [ ] Aplicar SRP: cada componente tem uma função

### 5. Integração e Polimento (1h)
- [ ] Conectar camadas seguindo Dependency Rule
- [ ] Estados de loading e erro
- [ ] Ajustes de responsividade
- [ ] Testes básicos

### 6. Documentação (30 min)
- [ ] Atualizar README
- [ ] Documentar arquitetura
- [ ] Screenshots da interface

---

## 📁 Estrutura Seguindo Clean Architecture

```
src/features/employees/
├── components/           # Camada de Apresentação (UI)
│   ├── EmployeeTable.tsx # Responsabilidade: exibir tabela
│   ├── EmployeeSearch.tsx # Responsabilidade: capturar input
│   ├── EmployeeCard.tsx  # Responsabilidade: exibir cards
│   └── Employees.tsx     # Responsabilidade: orquestrar
├── api/                  # Camada Externa (Infraestrutura)
│   └── employeeApi.ts    # Responsabilidade: comunicação HTTP
├── store/                # Camada de Estado
│   └── useEmployeesStore.ts # Responsabilidade: gerenciar estado
└── types/                # Camada de Domínio
    └── employee.ts       # Responsabilidade: definir contratos
```

### 🔄 Fluxo de Dependências (Dependency Rule)

```
UI Components → Hooks/Store → Services → API
     ↓              ↓           ↓        ↓
  Apresentação → Aplicação → Domínio → Infraestrutura
```

---

## 🎯 Critérios de Avaliação

### ✅ Implementados
- **Lógica de programação**: Código limpo e estruturado (SRP + Clean Code)
- **Organização**: Arquitetura em camadas (Dependency Rule)
- **CSS/Estilização**: Design responsivo
- **README**: Documentação completa
- **TypeScript**: Tipagem completa (diferencial)

### 🏗️ Princípios de Qualidade

#### **SRP - Single Responsibility**
- [ ] Cada componente tem uma única responsabilidade
- [ ] Funções pequenas e focadas
- [ ] Separação clara entre UI, lógica e dados

#### **Clean Code**
- [ ] Nomes descritivos e claros
- [ ] Funções pequenas (< 20 linhas)
- [ ] Evitar duplicação de código
- [ ] Código autoexplicativo

#### **Dependency Rule**
- [ ] UI não conhece implementação da API
- [ ] Lógica de negócio independente de frameworks
- [ ] Dependências apontam do exterior para o interior
- [ ] Fácil de testar e manter

---

## 📅 Cronograma

| Fase | Duração | Descrição |
|------|---------|-----------|
| 1 | 30min | Setup e arquitetura |
| 2 | 30min | Domínio e tipos |
| 3 | 1h | Camada de serviços |
| 4 | 2h | Camada de apresentação |
| 5 | 1h | Integração e polimento |
| 6 | 30min | Documentação |

**Total: 5-6 horas**

---

## 🚀 Próximos Passos

1. Configurar API simulada
2. Criar feature employees seguindo Clean Architecture
3. Implementar componentes com SRP
4. Conectar camadas seguindo Dependency Rule
5. Testar e documentar

---

## 📚 Referências de Arquitetura

- **Clean Architecture**: Separação de responsabilidades
- **SRP**: Cada módulo tem uma razão para mudar
- **Dependency Rule**: Dependências apontam para o domínio
- **Clean Code**: Código legível e manutenível

---

*Roadmap focado em Clean Architecture e princípios de qualidade.*
