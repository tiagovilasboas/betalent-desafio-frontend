# ✅ Checklist - Desafio Front-end BeTalent

## 📋 Checklist Geral

### 🚀 Setup Inicial
- [ ] **Configurar API simulada**
  - [ ] Instalar json-server
  - [ ] Clonar repositório de dados
  - [ ] Testar endpoint da API

- [ ] **Preparar estrutura do projeto**
  - [ ] Usar gerador Plop para criar feature employees
  - [ ] Verificar estrutura seguindo Clean Architecture
  - [ ] Definir camadas: UI → Estado → Serviços → API

### 🎨 Definição de Tipos
- [ ] **Interfaces TypeScript (Domínio)**
  - [ ] Interface `Employee` (responsabilidade única)
  - [ ] Tipos para filtros de pesquisa
  - [ ] Verificar SRP: cada interface tem uma função

- [ ] **Utilitários de formatação (Funções Puras)**
  - [ ] Função `formatDate()` (sem dependências externas)
  - [ ] Função `formatPhone()` (sem dependências externas)
  - [ ] Verificar Clean Code: nomes descritivos e funções pequenas

### 🔌 Camada de Serviços
- [ ] **API Client (Infraestrutura)**
  - [ ] Função `getAllEmployees()` (responsabilidade única)
  - [ ] Tratamento de erros básico
  - [ ] Verificar Dependency Rule: camada mais externa

- [ ] **Store (Estado)**
  - [ ] Estado inicial bem definido
  - [ ] Função `fetchEmployees()` (responsabilidade única)
  - [ ] Função `setFilters()` (responsabilidade única)
  - [ ] Lógica de filtros (domínio)
  - [ ] Verificar Dependency Rule: depende da API

### 🧩 Componentes da Interface
- [ ] **Componente de Pesquisa (UI Pura)**
  - [ ] Input de pesquisa
  - [ ] Placeholder informativo
  - [ ] Verificar SRP: responsabilidade única - capturar input
  - [ ] Verificar Dependency Rule: depende do estado

- [ ] **Tabela de Colaboradores (UI Pura)**
  - [ ] Estrutura da tabela
  - [ ] Colunas: Imagem, Nome, Cargo, Data, Telefone
  - [ ] Avatar com imagem do usuário
  - [ ] Verificar SRP: responsabilidade única - exibir tabela
  - [ ] Verificar Dependency Rule: depende do estado e utilitários

- [ ] **Cards para Mobile (UI Pura)**
  - [ ] Layout em cards
  - [ ] Informações organizadas
  - [ ] Responsividade
  - [ ] Verificar SRP: responsabilidade única - exibir cards
  - [ ] Verificar Dependency Rule: depende do estado e utilitários

### 📱 Layout Responsivo
- [ ] **Breakpoints**
  - [ ] Desktop: > 768px (tabela)
  - [ ] Mobile: ≤ 768px (cards)

- [ ] **Componente Principal (Orquestrador)**
  - [ ] Alternância entre tabela e cards
  - [ ] Container responsivo
  - [ ] Verificar SRP: responsabilidade única - orquestrar
  - [ ] Verificar Dependency Rule: depende do estado e outros componentes

### 🎨 Estilização e UX
- [ ] **Estados da Interface**
  - [ ] Loading states básicos
  - [ ] Estados vazios
  - [ ] Feedback visual
  - [ ] Verificar Clean Code: nomes descritivos

### 🧪 Testes
- [ ] **Testes Básicos**
  - [ ] Utilitários de formatação (funções puras)
  - [ ] Renderização dos componentes (UI isolada)
  - [ ] Verificar testabilidade: componentes independentes

### 📚 Documentação
- [ ] **README**
  - [ ] Descrição do projeto
  - [ ] Instruções de instalação
  - [ ] Screenshots da interface
  - [ ] Documentar arquitetura Clean Architecture

---

## 🎯 Critérios de Avaliação

### ✅ Lógica de Programação
- [ ] Código limpo e bem estruturado (SRP + Clean Code)
- [ ] Separação de responsabilidades (SRP)
- [ ] Tratamento de erros adequado
- [ ] Funções pequenas e focadas (< 20 linhas)

### ✅ Organização
- [ ] Estrutura de arquivos clara
- [ ] Arquitetura em camadas (Dependency Rule)
- [ ] Commits organizados
- [ ] Responsabilidades bem definidas

### ✅ CSS/Estilização
- [ ] Design responsivo
- [ ] Consistência visual
- [ ] Estados visuais adequados
- [ ] Nomenclatura clara (Clean Code)

### ✅ README Detalhado
- [ ] Instruções de instalação claras
- [ ] Documentação de funcionalidades
- [ ] Screenshots da interface
- [ ] Explicação da arquitetura

### ✅ TypeScript (Diferencial)
- [ ] Tipagem completa
- [ ] Interfaces bem definidas
- [ ] Type safety implementado
- [ ] Contratos claros (Domínio)

---

## 🏗️ Princípios de Qualidade

### **SRP - Single Responsibility**
- [ ] Cada componente tem uma única responsabilidade
- [ ] Funções pequenas e focadas
- [ ] Separação clara entre UI, lógica e dados
- [ ] Interfaces com responsabilidade única

### **Clean Code**
- [ ] Nomes descritivos e claros
- [ ] Funções pequenas (< 20 linhas)
- [ ] Evitar duplicação de código
- [ ] Código autoexplicativo
- [ ] Comentários desnecessários removidos

### **Dependency Rule**
- [ ] UI não conhece implementação da API
- [ ] Lógica de negócio independente de frameworks
- [ ] Dependências apontam do exterior para o interior
- [ ] Fácil de testar e manter
- [ ] Camadas bem definidas

---

## 🚀 Funcionalidades Obrigatórias

### 📊 Tabela de Colaboradores
- [ ] Exibe imagem (thumb do usuário)
- [ ] Exibe nome do colaborador
- [ ] Exibe cargo
- [ ] Exibe data de admissão (formatada)
- [ ] Exibe telefone (formatado)

### 🔍 Funcionalidade de Pesquisa
- [ ] Input de pesquisa funcional
- [ ] Filtra por nome (case-insensitive)
- [ ] Filtra por cargo (case-insensitive)
- [ ] Filtra por telefone

### 📱 Layout Responsivo
- [ ] Funciona em desktop (> 768px)
- [ ] Funciona em mobile (≤ 768px)
- [ ] Tabela em desktop
- [ ] Cards em mobile

### 🎨 Formatação de Dados
- [ ] Datas no formato DD/MM/YYYY
- [ ] Telefones no formato (XX) XXXXX-XXXX
- [ ] Imagens carregam corretamente

---

## 📅 Cronograma de Verificação

### Dia 1: Setup e Arquitetura
- [ ] Configuração inicial
- [ ] Definição de tipos (domínio)
- [ ] Camada de serviços
- [ ] Verificar Dependency Rule

### Dia 2: Interface
- [ ] Componentes principais (UI pura)
- [ ] Layout responsivo
- [ ] Funcionalidade de pesquisa
- [ ] Verificar SRP

### Dia 3: Finalização
- [ ] Estilização final
- [ ] Testes básicos
- [ ] Documentação
- [ ] Verificar Clean Code

---

## 🎯 Checklist de Entrega

### 📦 Repositório
- [ ] Código completo no GitHub
- [ ] Commits organizados
- [ ] README detalhado
- [ ] Screenshots da interface
- [ ] Documentação da arquitetura

### 🧪 Qualidade
- [ ] Código sem erros de lint
- [ ] TypeScript sem erros
- [ ] Funcionalidades implementadas
- [ ] Princípios de Clean Architecture aplicados

### 🎨 Interface
- [ ] Layout responsivo
- [ ] UX intuitiva
- [ ] Acessibilidade básica
- [ ] Componentes bem estruturados

---

## 📝 Notas de Desenvolvimento

### Pontos de Atenção
- [ ] Verificar se a API está rodando na porta correta
- [ ] Testar em diferentes navegadores
- [ ] Verificar responsividade em diferentes dispositivos
- [ ] Validar formatação de dados
- [ ] Verificar Dependency Rule em cada camada
- [ ] Confirmar SRP em cada componente/função

### Benefícios da Arquitetura
- [ ] **Testabilidade**: Componentes isolados e testáveis
- [ ] **Manutenibilidade**: Mudanças localizadas
- [ ] **Escalabilidade**: Fácil adicionar funcionalidades
- [ ] **Legibilidade**: Código autoexplicativo

---

*Checklist focado em Clean Architecture e princípios de qualidade.* 