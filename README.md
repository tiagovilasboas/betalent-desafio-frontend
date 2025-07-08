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

3. **Configure a API simulada**:
   ```bash
   # Instale o json-server globalmente
   npm install -g json-server
   
   # Clone o repositório de dados da BeTalent
   git clone https://github.com/BeMobile/teste-pratico-frontend
   cd teste-pratico-frontend
   
   # Execute a API simulada
   json-server --watch db.json --port 3001
   ```

4. **Execute a aplicação** (em outro terminal):
   ```bash
   npm run dev
   ```

5. **Acesse a aplicação**: http://localhost:5173

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
