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
- ✅ **Suporte a múltiplos idiomas (PT-BR/EN)**: Detecção automática e seletor manual

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

## � Deploy

A aplicação está publicada na **Vercel** e pode ser acessada em:

👉 https://betalent-desafio-frontend.vercel.app/

O deploy é realizado automaticamente a cada _push_ na branch `main`. A Vercel executa a pipeline abaixo, descrita no arquivo `vercel.json`:

1. **Instalação de dependências** (`npm install`)
2. **Execução da suíte de testes** (`npm test`)
3. **Build de produção** (`npm run build`)
4. **Publicação** do diretório `dist` e da _serverless function_ em `api/index.js`.

```json
{
  "version": 2,
  "builds": [
    {
      "src": "package.json",
      "use": "@vercel/static-build",
      "config": { "distDir": "dist" }
    },
    {
      "src": "api/index.js",
      "use": "@vercel/node",
      "config": { "includeFiles": "db.json" }
    }
  ],
  "routes": [
    { "src": "/api/(.*)", "dest": "/api/index.js" },
    { "handle": "filesystem" },
    { "src": "/(.*)", "dest": "/index.html" }
  ],
  "devCommand": "npm run dev",
  "buildCommand": "npm run build",
  "outputDirectory": "dist"
}
```

Com isso, o fluxo de **CI/CD** fica totalmente automatizado e sem intervenção manual.

## �🎨 Funcionalidades

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
- Suporte a múltiplos idiomas (PT-BR/EN) com detecção automática e seletor manual

### Interface

- Design moderno e intuitivo
- Responsividade completa
- Estados visuais adequados
- Acessibilidade implementada

## ✨ Diferenciais e Boas Práticas Adotadas

Além dos requisitos básicos, o projeto foi desenvolvido com foco em qualidade de código, performance e manutenibilidade, aplicando práticas modernas de engenharia de software.

### Arquitetura e Código Limpo

- **Arquitetura em Camadas**: A estrutura do projeto (`pages`, `features`, `components`, `api`, `store`) isola responsabilidades, seguindo a **Dependency Rule** e facilitando a manutenção e escalabilidade futura.
- **Princípios S.O.L.I.D.**: O código foi escrito seguindo o **Princípio da Responsabilidade Única (SRP)**. A lógica de apresentação (filtros, ordenação, paginação) foi isolada no hook `useEmployeesView`, que atua como um **Proxy de Apresentação**. Os componentes da UI (`EmployeeTable`, `EmployeeCard`, etc.) são "burros" e apenas recebem dados e funções, enquanto o `useEmployeesStore` (Zustand) atua puramente como um cache de dados brutos da API.
- **Clean Code**: Adoção de nomes claros para variáveis e funções, baixo aninhamento e complexidade de código, e uso de componentes pequenos e focados (ex: `EmployeeContent` para a lógica de renderização condicional).

### Performance e Experiência do Usuário (UX)

- **Debounce na Busca**: Para otimizar a performance, a função de busca aguarda 300ms após o usuário parar de digitar para realizar a filtragem, evitando re-renderizações excessivas e melhorando a fluidez da interação.
- **Estados de Interface (UI States)**: A aplicação fornece feedback visual claro para diferentes cenários, incluindo um **skeleton loader** durante o carregamento dos dados, uma mensagem para quando a busca não retorna resultados e um alerta em caso de erro na API.
- **Paginação**: Os dados são paginados para melhorar a performance e a usabilidade, especialmente ao lidar com grandes volumes de registros.
- **Ordenação de Colunas**: A tabela de funcionários permite a ordenação dinâmica por nome, cargo e data de admissão.

### Desenvolvimento e Manutenção (DX)

- **Gerenciamento de Estado Desacoplado**: Utilização do **Zustand** (`useEmployeesStore`) como um cache de dados brutos da API, enquanto toda a lógica de UI (filtros, paginação, ordenação) é gerenciada localmente pelo hook `useEmployeesView`, mantendo o estado global enxuto e a lógica de apresentação contida.
- **CI/CD com GitHub Actions + Vercel**: A cada `push` ou `pull request` na branch `main` o GitHub Actions executa a suíte de testes (`lint`, `type-check`, `test`). Se tudo estiver ✅, a Vercel dispara o processo de _build_ (`npm run build`) e publica automaticamente a nova versão em produção.
- **Abstração da Camada de API**: As chamadas de rede são centralizadas em um `apiClient` genérico, desacoplando a aplicação da implementação específica do `fetch`. Isso facilita a manutenção, o tratamento de erros e futuras migrações de tecnologia (ex: para GraphQL).
- **Scripts Otimizados**: O script `npm run dev` utiliza `concurrently` e `kill-port` para gerenciar os processos da API e do front-end com um único comando, garantindo que as portas sejam liberadas para evitar conflitos (`EADDRINUSE`).
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
.github/
└── workflows/
    └── ci.yml          # Workflow de Integração Contínua

src/
├── api/                # Cliente de API centralizado (abstração do fetch)
└── features/
    └── employees/      # Feature principal do desafio
        ├── api/        # Definição dos endpoints da feature
        ├── components/ # Componentes da interface (dumb components)
        ├── hooks/      # Hooks customizados (lógica de apresentação)
        ├── repository/ # Repositório de dados (abstração da API)
        ├── store/      # Gerenciamento de estado (cache do Zustand)
        └── types/      # Tipos TypeScript
```

## 🧪 Testes

A suíte de testes foi configurada com Vitest e React Testing Library, cobrindo as principais funcionalidades da aplicação:

- **Utilitários**: Funções de formatação.
- **Repositório**: Interações com a API (mocked).
- **Hooks**: Lógica de apresentação e regras de negócio.
- **Stores**: Gerenciamento de estado.

```bash
# Executar a suíte de testes completa
npm run test

# Executar os testes em modo watch
npm run test:watch
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
