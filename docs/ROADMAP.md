# 🗺️ Roadmap - Desafio Front-end BeTalent

## 📋 Visão Geral do Projeto

Este roadmap detalha a implementação de uma interface responsiva para exibir uma tabela de colaboradores com funcionalidade de pesquisa, seguindo os requisitos do desafio da BeTalent.

### 🎯 Objetivos
- Construir uma tabela responsiva de colaboradores
- Implementar funcionalidade de pesquisa (cargo, nome, telefone)
- Formatação adequada de datas e telefones
- Layout responsivo (desktop e mobile)
- Integração com API simulada (json-server)

---

## 🚀 Fase 1: Setup e Configuração Inicial

### 1.1 Análise do Projeto Atual ✅
- [x] Examinar estrutura do boilerplate existente
- [x] Identificar arquitetura em camadas disponível

### 1.2 Configuração da API Simulada
- [ ] Instalar json-server globalmente ou como dependência
- [ ] Clonar repositório de dados: https://github.com/BeMobile/desafio-front-end
- [ ] Configurar script para executar json-server
- [ ] Testar endpoint da API

### 1.3 Estrutura de Pastas
- [ ] Criar feature `employees` seguindo a arquitetura existente:
  ```
  src/features/employees/
  ├── components/
  │   ├── EmployeeTable.tsx
  │   ├── EmployeeSearch.tsx
  │   └── EmployeeCard.tsx (mobile)
  ├── hooks/
  │   └── useEmployees.ts
  ├── services/
  │   └── employeeApi.ts
  ├── types/
  │   └── employee.ts
  └── utils/
      ├── dateFormatter.ts
      └── phoneFormatter.ts
  ```

---

## 🎨 Fase 2: Definição de Tipos e Interfaces

### 2.1 Tipos TypeScript
- [ ] Definir interface `Employee`:
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
- [ ] Definir tipos para filtros de pesquisa
- [ ] Definir tipos para estados da aplicação

### 2.2 Utilitários de Formatação
- [ ] Implementar `dateFormatter.ts`:
  - Formatação de data de admissão (DD/MM/YYYY)
  - Suporte a diferentes formatos de entrada
- [ ] Implementar `phoneFormatter.ts`:
  - Formatação de telefone brasileiro
  - Suporte a diferentes formatos de entrada

---

## 🔌 Fase 3: Camada de Serviços (API)

### 3.1 Configuração da API
- [ ] Implementar `employeeApi.ts`:
  - Função para buscar todos os colaboradores
  - Função para buscar colaboradores com filtros
  - Tratamento de erros
  - Tipagem das respostas

### 3.2 Integração com json-server
- [ ] Configurar URL base da API
- [ ] Implementar interceptors para tratamento de erros
- [ ] Adicionar loading states

---

## 🎣 Fase 4: Hooks e Lógica de Estado

### 4.1 Hook Principal
- [ ] Implementar `useEmployees.ts`:
  - Estado para lista de colaboradores
  - Estado para filtros de pesquisa
  - Estado de loading e erro
  - Funções para buscar e filtrar dados

### 4.2 Lógica de Filtros
- [ ] Implementar função de pesquisa:
  - Busca por nome (case-insensitive)
  - Busca por cargo (case-insensitive)
  - Busca por telefone (apenas números)
  - Combinação de múltiplos filtros

---

## 🧩 Fase 5: Componentes da Interface

### 5.1 Componente de Pesquisa
- [ ] Implementar `EmployeeSearch.tsx`:
  - Input de pesquisa responsivo
  - Debounce para otimizar performance
  - Placeholder informativo
  - Ícone de pesquisa

### 5.2 Tabela de Colaboradores (Desktop)
- [ ] Implementar `EmployeeTable.tsx`:
  - Tabela responsiva com Mantine
  - Colunas: Imagem, Nome, Cargo, Data, Telefone
  - Paginação (se necessário)
  - Estados de loading e vazio
  - Ordenação por colunas

### 5.3 Cards de Colaboradores (Mobile)
- [ ] Implementar `EmployeeCard.tsx`:
  - Layout em cards para mobile
  - Informações organizadas verticalmente
  - Imagem do colaborador
  - Dados formatados

---

## 📱 Fase 6: Layout Responsivo

### 6.1 Breakpoints e Media Queries
- [ ] Definir breakpoints:
  - Desktop: > 768px (tabela)
  - Mobile: ≤ 768px (cards)
- [ ] Implementar responsividade com Mantine

### 6.2 Componente Principal
- [ ] Criar componente container que:
  - Alterna entre tabela e cards baseado no tamanho da tela
  - Gerencia layout responsivo
  - Integra pesquisa e lista

---

## 🎨 Fase 7: Estilização e UX

### 7.1 Design System
- [ ] Definir cores e tipografia consistentes
- [ ] Implementar espaçamentos padronizados
- [ ] Criar componentes de loading e estados vazios

### 7.2 Melhorias de UX
- [ ] Adicionar animações suaves
- [ ] Implementar feedback visual para ações
- [ ] Otimizar para acessibilidade (ARIA labels, navegação por teclado)

---

## 🧪 Fase 8: Testes

### 8.1 Testes Unitários
- [ ] Testar utilitários de formatação
- [ ] Testar lógica de filtros
- [ ] Testar hooks customizados

### 8.2 Testes de Componentes
- [ ] Testar renderização dos componentes
- [ ] Testar interações do usuário
- [ ] Testar responsividade

### 8.3 Testes de Integração
- [ ] Testar fluxo completo de busca
- [ ] Testar integração com API

---

## 🚀 Fase 9: Otimizações e Polimento

### 9.1 Performance
- [ ] Implementar virtualização para listas grandes
- [ ] Otimizar re-renders desnecessários
- [ ] Lazy loading de imagens

### 9.2 Acessibilidade
- [ ] Adicionar atributos ARIA
- [ ] Testar navegação por teclado
- [ ] Verificar contraste de cores

### 9.3 SEO e Meta Tags
- [ ] Adicionar meta tags apropriadas
- [ ] Configurar título e descrição

---

## 📚 Fase 10: Documentação

### 10.1 README Atualizado
- [ ] Documentar instalação e setup
- [ ] Explicar arquitetura do projeto
- [ ] Incluir screenshots da interface
- [ ] Documentar funcionalidades

### 10.2 Documentação de Código
- [ ] Adicionar JSDoc nos componentes principais
- [ ] Documentar tipos e interfaces
- [ ] Criar guia de contribuição

---

## 🎯 Critérios de Avaliação

### ✅ Lógica de Programação
- [ ] Código limpo e bem estruturado
- [ ] Separação de responsabilidades
- [ ] Reutilização de código
- [ ] Tratamento de erros

### ✅ Organização
- [ ] Estrutura de arquivos clara
- [ ] Nomenclatura consistente
- [ ] Arquitetura em camadas
- [ ] Commits organizados

### ✅ CSS/Estilização
- [ ] Design responsivo
- [ ] Consistência visual
- [ ] Performance CSS
- [ ] Acessibilidade

### ✅ README Detalhado
- [ ] Instruções de instalação
- [ ] Documentação de funcionalidades
- [ ] Screenshots da interface
- [ ] Tecnologias utilizadas

### ✅ TypeScript (Diferencial)
- [ ] Tipagem completa
- [ ] Interfaces bem definidas
- [ ] Type safety
- [ ] IntelliSense funcionando

---



---

## 📅 Cronograma Estimado

| Fase | Duração | Descrição |
|------|---------|-----------|
| 1 | 1-2h | Setup e configuração |
| 2 | 1h | Definição de tipos |
| 3 | 2h | Camada de serviços |
| 4 | 2h | Hooks e estado |
| 5 | 4h | Componentes principais |
| 6 | 2h | Layout responsivo |
| 7 | 2h | Estilização |
| 8 | 3h | Testes |
| 9 | 2h | Otimizações |
| 10 | 1h | Documentação |

**Total estimado: 20-24 horas**

---

## 🎯 Entregáveis

### Código
- [ ] Repositório GitHub com código completo
- [ ] Commits organizados e descritivos
- [ ] Pull requests bem documentados

### Interface
- [ ] Tabela responsiva funcionando
- [ ] Pesquisa implementada
- [ ] Formatação de dados
- [ ] Layout mobile otimizado

### Documentação
- [ ] README detalhado
- [ ] Screenshots da interface
- [ ] Instruções de instalação
- [ ] Documentação de API

---

## 🚀 Próximos Passos

1. **Iniciar Fase 1**: Setup da API simulada
2. **Definir estrutura de dados**: Analisar formato dos dados da API
3. **Criar feature employees**: Usar gerador Plop do projeto
4. **Implementar componentes básicos**: Tabela e pesquisa
5. **Adicionar responsividade**: Layout mobile
6. **Polir interface**: Estilização e UX
7. **Testar e documentar**: Qualidade e documentação

---

*Este roadmap será atualizado conforme o progresso do desenvolvimento.*
