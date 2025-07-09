# 🎯 Desafio Front-end BeTalent

Solução para o teste técnico front-end da BeTalent - interface responsiva para visualização de colaboradores com funcionalidade de pesquisa.

> [!NOTE]
> **Acesse a versão ao vivo do projeto, hospedada na Vercel:**
> ### [betalent-desafio-frontend.vercel.app](https://betalent-desafio-frontend.vercel.app/)

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
| `npm run analyze`| Gera uma análise visual do tamanho dos bundles de produção (`stats.html`).              |
| `npm run lighthouse`| Executa a suíte de testes do Lighthouse na versão de produção.                        |

## ✨ Diferenciais e Boas Práticas Adotadas

Além dos requisitos básicos, o projeto foi desenvolvido com foco em qualidade de código, performance e manutenibilidade, aplicando práticas modernas de engenharia de software.

### Arquitetura e Código Limpo

- **Arquitetura em Camadas**: A estrutura do projeto (`pages`, `features`, `components`, `api`, `store`) isola responsabilidades, seguindo a **Dependency Rule** e facilitando a manutenção e escalabilidade futura.
- **Princípios S.O.L.I.D.**: O código foi escrito seguindo o **Princípio da Responsabilidade Única (SRP)**. A lógica de apresentação (filtros, ordenação, paginação) foi isolada no hook `useEmployeesView`, que atua como um **Proxy de Apresentação**. Os componentes da UI (`EmployeeTable`, `EmployeeCard`, etc.) são "burros" e apenas recebem dados e funções, enquanto o `useEmployeesStore` (Zustand) atua puramente como um cache de dados brutos da API.
- **Clean Code**: Adoção de nomes claros para variáveis e funções, baixo aninhamento e complexidade de código, e uso de componentes pequenos e focados.

### Performance, UX e PWA

- **Progressive Web App (PWA)**: A aplicação é um PWA completo, com um `manifest.webmanifest` e ícones, permitindo que seja "instalada" em dispositivos móveis e desktops para uma experiência mais próxima a um app nativo.
- **Code Splitting Estratégico**: O código da feature principal (`employees`) é separado em seu próprio "chunk" de JavaScript. Isso significa que o bundle inicial carregado pelo navegador é mínimo, e o código da feature só é baixado quando necessário, melhorando o tempo de carregamento inicial.
- **Lazy Loading de Componentes**: Utilização de `React.lazy` e `Suspense` para carregar componentes de forma preguiçosa, com um **Skeleton Loader** como fallback, melhorando a percepção de velocidade.
- **Fontes Auto-hospedadas (Self-hosting)**: As fontes do projeto (Roboto) são servidas junto com a aplicação, eliminando requisições a domínios externos (como `fonts.googleapis.com`) e reduzindo a latência para a primeira pintura de conteúdo (FCP).
- **Pré-carregamento de Dados da API**: Uma tag `<link rel="preload">` no `index.html` instrui o navegador a iniciar o download dos dados dos funcionários em paralelo com os scripts, fazendo com que a renderização do conteúdo principal (LCP) ocorra muito mais rápido.
- **Debounce na Busca**: Para otimizar a performance, a função de busca aguarda 300ms após o usuário parar de digitar para realizar a filtragem, evitando re-renderizações excessivas.

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
