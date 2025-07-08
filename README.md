# 🎯 Desafio Front-end BeTalent

Solução para o teste técnico front-end da BeTalent - interface responsiva para visualização de colaboradores com funcionalidade de pesquisa.

## 📋 Sobre o Desafio

Este projeto foi desenvolvido como solução para o **Teste Prático Front-end BeTalent**, seguindo tanto o [repositório oficial](https://github.com/BeMobile/teste-pratico-frontend) quanto o documento de requisitos compartilhado.

O desafio consiste em construir uma interface responsiva que exiba uma tabela de colaboradores com funcionalidade de pesquisa, seguindo o mockup fornecido no Figma.

### 🎯 Requisitos Implementados

- ✅ **Tabela de Colaboradores**: Exibe imagem (thumb do usuário), nome, cargo, data de admissão e telefone
- ✅ **Funcionalidade de Pesquisa**: Input que filtra por cargo, nome e telefone
- ✅ **Formatação de Dados**: Datas e telefones formatados no front-end
- ✅ **Layout Responsivo**: Desktop e mobile
- ✅ **API Simulada**: Integração com json-server
- ✅ **Tecnologias**: React.js com TypeScript (diferencial)

## 🚀 Como Executar

### Pré-requisitos

- Node.js (versão 20 LTS ou superior)
- npm ou yarn
- json-server

### Instalação e Execução

1. **Clone o repositório**:
   ```bash
   git clone <seu-repositorio>
   cd <seu-projeto>
   ```

2. **Instale as dependências**:
   ```bash
   npm install
   ```

3. **Execute a aplicação e a API simulada**:
   O projeto utiliza o `concurrently` para iniciar o servidor de desenvolvimento do Vite e o `json-server` simultaneamente.
   ```bash
   npm run dev
   ```

4. **Acesse a aplicação**: http://localhost:5173

## 🎨 Funcionalidades

### Tabela de Colaboradores
- Exibe dados completos dos colaboradores
- Layout responsivo (tabela no desktop, cards no mobile)
- Estados de loading e erro
- Formatação adequada de datas e telefones

### Pesquisa
- Input de pesquisa em tempo real
- Filtra por nome, cargo e telefone
- Busca case-insensitive
- Debounce para otimização de performance

### Interface
- Design moderno e intuitivo
- Responsividade completa
- Estados visuais adequados
- Acessibilidade implementada

## ✨ Diferenciais e Boas Práticas Adotadas

Além dos requisitos básicos, o projeto foi desenvolvido com foco em qualidade de código, performance e manutenibilidade, aplicando práticas modernas de engenharia de software.

### Arquitetura e Código Limpo

- **Arquitetura em Camadas**: A estrutura do projeto (`pages`, `features`, `components`, `api`, `store`) isola responsabilidades, seguindo a **Dependency Rule** e facilitando a manutenção e escalabilidade futura.
- **Princípios S.O.L.I.D.**: O código foi escrito seguindo o **Princípio da Responsabilidade Única (SRP)**. Componentes e funções são focados em uma única tarefa (ex: `HomePage` para a rota, `Employees` para a feature, `useEmployeesStore` para o estado).
- **Clean Code**: Adoção de nomes claros para variáveis e funções, baixo aninhamento e complexidade de código, e uso de componentes pequenos e focados.

### Performance e Experiência do Usuário (UX)

- **Debounce na Busca**: Para otimizar a performance, a função de busca aguarda 300ms após o usuário parar de digitar para realizar a filtragem, evitando re-renderizações excessivas e melhorando a fluidez da interação.
- **Estados de Interface (UI States)**: A aplicação fornece feedback visual claro para diferentes cenários, incluindo um **skeleton loader** durante o carregamento dos dados, uma mensagem para quando a busca não retorna resultados e um alerta em caso de erro na API.
- **Paginação**: Os dados são paginados para melhorar a performance e a usabilidade, especialmente ao lidar com grandes volumes de registros.
- **Ordenação de Colunas**: A tabela de funcionários permite a ordenação dinâmica por nome, cargo e data de admissão, facilitando a análise dos dados pelo usuário.

### Desenvolvimento e Manutenção (DX)

- **Gerenciamento de Estado Centralizado**: Utilização do **Zustand** para um gerenciamento de estado global simples, eficiente e desacoplado da UI, facilitando o rastreamento e a modificação do estado da aplicação.
- **Scripts Otimizados**: O script `npm run dev` utiliza `concurrently` e `kill-port` para gerenciar os processos da API e do front-end com um único comando, garantindo que as portas sejam liberadas automaticamente para evitar conflitos (`EADDRINUSE`).
- **Commits Semânticos**: O histórico de commits segue o padrão **Conventional Commits**, o que torna o histórico mais legível, facilita a revisão do código e permite a automação de changelogs.
- **Design System com Mantine**: O projeto utiliza o **Mantine** como base para a UI, com um `theme.ts` centralizado que exporta tokens de design (cores, tipografia, etc.), garantindo consistência visual e agilidade no desenvolvimento.

## 🛠️ Tecnologias Utilizadas

Este projeto foi desenvolvido utilizando o [React + Vite Boilerplate](https://github.com/tiagovilasboas/react-vite-boilerplate) como base, que fornece:

- React 19 com TypeScript
- Vite para build e desenvolvimento
- Mantine para componentes de UI
- Arquitetura em camadas
- Testes com Vitest
- Qualidade de código com ESLint e Prettier

## 📁 Estrutura do Projeto

```
src/
├── features/
│   └── employees/          # Feature principal do desafio
│       ├── components/     # Componentes da interface
│       ├── api/           # Integração com API
│       ├── store/         # Gerenciamento de estado
│       └── types/         # Tipos TypeScript
├── utils/                 # Utilitários de formatação
└── docs/                  # Documentação do projeto
```

## 🧪 Testes

```bash
# Executar testes
npm run test

# Testes em modo watch
npm run test:watch

# Verificar cobertura
npm run test:ci
```

## 📚 Documentação

- [🗺️ Roadmap](docs/ROADMAP.md) - Plano de implementação
- [📋 Plano Detalhado](docs/IMPLEMENTATION_PLAN.md) - Guia passo a passo
- [✅ Checklist](docs/CHECKLIST.md) - Acompanhamento do progresso

## 🎯 Critérios de Avaliação

### ✅ Implementados
- **Lógica de programação**: Código limpo e bem estruturado (SRP + Clean Code)
- **Organização**: Arquitetura em camadas e commits organizados (Dependency Rule)
- **CSS/Estilização**: Design responsivo e consistente
- **README**: Documentação detalhada com instruções e screenshots
- **TypeScript**: Tipagem completa (diferencial)

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
