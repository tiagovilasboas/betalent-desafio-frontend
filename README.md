# 🎯 Desafio Front-end BeTalent

Solução para o teste técnico front-end da BeTalent - interface responsiva para visualização de colaboradores com funcionalidade de pesquisa.

🌐 **Demo:** [betalent-desafio-frontend.vercel.app](https://betalent-desafio-frontend.vercel.app/)<br />
👨‍💻 **Autor:** [Tiago Vilas Boas](https://github.com/tiagovilasboas)

<p align="left">
  <a href="https://react.dev/" target="_blank" rel="noreferrer"><img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React"></a>
  <a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer"><img src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript"></a>
  <a href="https://vitejs.dev/" target="_blank" rel="noreferrer"><img src="https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white" alt="Vite"></a>
  <a href="https://mantine.dev/" target="_blank" rel="noreferrer"><img src="https://img.shields.io/badge/Mantine-339AF0?style=for-the-badge&logo=mantine&logoColor=white" alt="Mantine"></a>
  <a href="https://github.com/pmndrs/zustand" target="_blank" rel="noreferrer"><img src="https://img.shields.io/badge/Zustand-000000?style=for-the-badge&logo=zustand&logoColor=white" alt="Zustand"></a>
  <a href="https://vitest.dev/" target="_blank" rel="noreferrer"><img src="https://img.shields.io/badge/Vitest-6E9F18?style=for-the-badge&logo=vitest&logoColor=white" alt="Vitest"></a>
  <a href="https://eslint.org/" target="_blank" rel="noreferrer"><img src="https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white" alt="ESLint"></a>
</p>

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
- ✅ **Progressive Web App (PWA)**: Otimizado para instalação em dispositivos móveis e desktops.

## 🚀 Como Executar

### Pré-requisitos

- Node.js (versão 20 LTS ou superior)
- npm

### Instalação

1. **Clone o repositório**:

   ```bash
   git clone https://github.com/tiagovilasboas/betalent-desafio-frontend.git
   cd betalent-desafio-frontend
   ```

2. **Instale as dependências**:

   ```bash
   npm install
   ```

### Scripts Disponíveis

| Script         | Descrição                                                                               |
| -------------- | --------------------------------------------------------------------------------------- |
| `npm run dev`  | Inicia o servidor de desenvolvimento (front-end) e a API simulada (`json-server`).      |
| `npm run build`| Compila a aplicação para produção, gerando os arquivos otimizados no diretório `dist/`. |
| `npm run preview`| Inicia um servidor local para visualizar a versão de produção (após o `build`).         |
| `npm run test` | Executa a suíte de testes completa com Vitest.                                          |
| `npm run lint` | Analisa o código em busca de erros de formatação e estilo com ESLint.                   |
| `npm run analyze`| Gera uma análise visual e interativa do tamanho dos bundles de produção (`dist/stats.html`), ajudando a identificar oportunidades de otimização. |
| `npm run lighthouse`| Executa a suíte de testes do Lighthouse na versão de produção para auditar performance, PWA, acessibilidade e SEO. |

## ✨ Diferenciais e Boas Práticas Adotadas

Além dos requisitos básicos, o projeto foi desenvolvido com foco em qualidade de código, performance e manutenibilidade, aplicando práticas modernas de engenharia de software.

### Arquitetura e Código Limpo

- **Arquitetura em Camadas**: A estrutura do projeto (`pages`, `features`, `components`, `api`, `store`) isola responsabilidades, seguindo a **Dependency Rule** e facilitando a manutenção e escalabilidade futura.
- **Princípios S.O.L.I.D.**: O código foi escrito seguindo o **Princípio da Responsabilidade Única (SRP)**. A lógica de apresentação (filtros, ordenação, paginação) foi isolada no hook `useEmployeesView`, que atua como um **Proxy de Apresentação**. Os componentes da UI (`EmployeeTable`, `EmployeeCard`, etc.) são "burros" e apenas recebem dados e funções, enquanto o `useEmployeesStore` (Zustand) atua puramente como um cache de dados brutos da API.
- **Clean Code**: Adoção de nomes claros para variáveis e funções, baixo aninhamento e complexidade de código, e uso de componentes pequenos e focados.

### Otimização de Performance e Core Web Vitals

A performance da aplicação foi uma prioridade, com foco em otimizar os **Core Web Vitals** (principais métricas do Google para experiência do usuário). As auditorias foram realizadas com o **Lighthouse**, e as seguintes técnicas foram implementadas para garantir tempos de carregamento rápidos e uma experiência fluida:

#### Resultados da Auditoria Lighthouse

| Categoria          | Score |
| ------------------ | :---: |
| 🚀 **Performance**   |  95%  |
| ♿ **Acessibilidade**|  83%  |
| 🛠️ **Best Practices** | 100%  |
| 📈 **SEO**           |  75%  |

| Métrica Core Web Vitals | Tempo  |
| ----------------------- | :----: |
| **FCP** (First Contentful Paint) | 2.1 s  |
| **LCP** (Largest Contentful Paint) | 2.6 s  |

#### Estratégias de Otimização

- **Análise de Bundle e Code Splitting**: Utilizando o script `npm run analyze` (com `rollup-plugin-visualizer`), identificamos que a feature `employees` e suas dependências representavam uma parte significativa do bundle inicial. Para otimizar, foi implementado o **code splitting estratégico** via `manualChunks` no `vite.config.ts`, separando a feature em seu próprio "chunk". Isso reduz drasticamente o tamanho do bundle principal, melhorando o tempo de carregamento inicial (FCP).
- **Lazy Loading de Componentes**: Dentro da feature, o componente `EmployeeTable` (o mais pesado) é carregado de forma preguiçosa com `React.lazy` e `Suspense`. Enquanto ele carrega, um **Skeleton Loader** é exibido, melhorando a percepção de velocidade e a experiência do usuário.
- **Fontes Auto-hospedadas (Self-hosting)**: As fontes (Roboto) são servidas junto com a aplicação, eliminando requisições a domínios externos (como `fonts.googleapis.com`) e reduzindo a latência para a **Primeira Pintura de Conteúdo (FCP)**.
- **Pré-carregamento de Recursos Críticos**: Uma tag `<link rel="preload">` no `index.html` instrui o navegador a iniciar o download dos dados da API em paralelo com os scripts. Isso garante que os dados necessários para a **Maior Pintura de Conteúdo (LCP)** estejam disponíveis mais cedo, acelerando a renderização da tabela de funcionários.
- **Debounce na Busca**: Para otimizar a performance da interação, a função de busca aguarda 300ms após o usuário parar de digitar para realizar a filtragem, evitando re-renderizações excessivas e garantindo uma UI responsiva.

### Progressive Web App (PWA)

A aplicação é um PWA completo, com um `manifest.webmanifest` e ícones otimizados, permitindo que seja "instalada" em dispositivos móveis e desktops para uma experiência mais próxima a um app nativo, com acesso offline (cache) e performance aprimorada.

### Desenvolvimento e Manutenção (DX)

- **Gerenciamento de Estado Desacoplado**: Utilização do **Zustand** (`useEmployeesStore`) como um cache de dados brutos da API, enquanto toda a lógica de UI (filtros, paginação, ordenação) é gerenciada localmente pelo hook `useEmployeesView`.
- **CI/CD com GitHub Actions + Vercel**: A cada `push` ou `pull request` na branch `main`, o GitHub Actions executa a suíte de testes (`lint`, `type-check`, `test`). Com a aprovação, a Vercel dispara o processo de _build_ e publica a nova versão.
- **Abstração da Camada de API**: As chamadas de rede são centralizadas em um `apiClient` genérico, desacoplando a aplicação da implementação específica do `fetch`.
- **Scripts Otimizados**: O script `npm run dev` utiliza `concurrently` e `kill-port` para gerenciar os processos da API e do front-end com um único comando.
- **Commits Semânticos**: O histórico de commits segue o padrão **Conventional Commits**.
- **Design System com Mantine**: O projeto utiliza o **Mantine** como base para a UI, com um `theme.ts` centralizado que exporta tokens de design.

## 🛠️ Tecnologias Utilizadas

Este projeto foi desenvolvido utilizando o [React + Vite Boilerplate](https://github.com/tiagovilasboas/react-vite-boilerplate) como base, que fornece:

- React 19 com TypeScript
- Vite para build e desenvolvimento
- Mantine para componentes de UI
- Zustand para gerenciamento de estado
- Vitest e React Testing Library para testes
- ESLint e Prettier para qualidade de código

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👨‍💻 Autor

**Tiago Vilas Boas**

- **LinkedIn:** [@tiagovilasboas](https://www.linkedin.com/in/tiagovilasboas/)
- **GitHub:** [@tiagovilasboas](https://github.com/tiagovilasboas)
