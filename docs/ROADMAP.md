# 🗺️ Roadmap de Evolução Técnica (Nível Staff)

## 🎯 Visão Estratégica

Este roadmap delineia a evolução técnica do projeto para além dos requisitos iniciais do desafio. O objetivo é transformá-lo em uma aplicação robusta, escalável e de fácil manutenção, aplicando práticas de engenharia de software de alto nível, como faria um engenheiro Staff ou Principal.

As prioridades são: **Qualidade**, **Performance em Escala**, **Resiliência** e **Experiência do Desenvolvedor (DX)**.

---

## 🚀 Fases de Implementação

### Fase 1: Fundações de Qualidade e Automação (Curto Prazo)

*O foco desta fase é estabelecer uma base sólida que garanta a qualidade e a confiabilidade do código a cada nova alteração, automatizando processos críticos.*

-   [ ] **Implementar Testes End-to-End (E2E)**
    -   **O quê:** Adicionar **Playwright** ao projeto.
    -   **Por quê:** Para simular a jornada real do usuário no navegador, garantindo que o fluxo principal (pesquisa, ordenação, paginação) funcione de ponta a ponta sem quebras.
    -   **Primeiro passo:** Criar um teste que carrega a página e valida a renderização da tabela.

-   [ ] **Configurar CI/CD com Deploy Contínuo na Vercel**
    -   **O quê:** Integrar o repositório do GitHub com a **Vercel** e configurar um pipeline de CI no **GitHub Actions**.
    -   **Por quê:** Para automatizar o processo de build, teste e deploy. A Vercel gerará um "Preview Deployment" para cada Pull Request, permitindo a revisão da funcionalidade em um ambiente real antes do merge. Após o merge na `main`, um deploy para produção será feito automaticamente.
    -   **Primeiro passo:** Conectar o repositório à Vercel para habilitar o deploy automático a cada push na `main`.

-   [ ] **Abstrair a Camada de API**
    -   **O quê:** Refatorar as chamadas `fetch` para um cliente de API centralizado (ex: um módulo `apiClient.ts`).
    -   **Por quê:** Para desacoplar a aplicação da implementação específica da fonte de dados, facilitando futuras migrações (para GraphQL, por exemplo) e a centralização de lógica de erro e autenticação.

### Fase 2: Performance e UX em Larga Escala (Médio Prazo)

*Com a qualidade garantida, o foco muda para otimizações que preparam a aplicação para um grande volume de dados e usuários, melhorando a experiência de forma significativa.*

-   [ ] **Implementar Virtualização de Lista (Windowing)**
    -   **O quê:** Substituir a paginação pela biblioteca **TanStack Virtual**.
    -   **Por quê:** Para garantir performance de 60fps mesmo com milhares de registros na tabela, renderizando apenas os itens visíveis na tela. É uma otimização de UX e performance superior à paginação.

-   [ ] **Adicionar Testes de Regressão Visual**
    -   **O quê:** Integrar **Storybook** com uma ferramenta como **Chromatic** ou **Percy**.
    -   **Por quê:** Para detectar alterações visuais não intencionais nos componentes de UI, prevenindo bugs de layout que são difíceis de pegar com testes unitários.

-   [ ] **Avançar para Máquina de Estados com XState**
    -   **O quê:** Refatorar a lógica de estados da página de funcionários (`useEmployeesStore`) para usar **XState**.
    -   **Por quê:** Para gerenciar a complexidade dos múltiplos estados (loading, erro, sucesso, busca, ordenação) de forma explícita e livre de bugs, eliminando a possibilidade de estados inconsistentes.

### Fase 3: Resiliência e Produtividade do Time (Longo Prazo)

*Nesta fase, o projeto é tratado como um produto maduro, com foco em resiliência em produção e na otimização do fluxo de trabalho dos desenvolvedores.*

-   [ ] **Analisar e Otimizar o Bundle (Code Splitting)**
    -   **O quê:** Usar `rollup-plugin-visualizer` para analisar o build e aplicar `React.lazy()` em componentes ou páginas.
    -   **Por quê:** Para reduzir o tempo de carregamento inicial da aplicação, baixando apenas o código necessário para a primeira renderização.

-   [ ] **Implementar Estratégia de Error Boundary**
    -   **O quê:** Criar um componente de `ErrorBoundary` global e integrá-lo com um serviço como **Sentry**.
    -   **Por quê:** Para evitar que um erro em um componente quebre a aplicação inteira, exibindo uma UI de fallback e reportando o erro para análise, melhorando a resiliência do sistema.

-   [ ] **Aprimorar Scaffolding de Código com Plop.js**
    -   **O quê:** Expandir os templates do **Plop.js**.
    -   **Por quê:** Para permitir a criação de uma feature inteira (componentes, store, testes, stories) com um único comando, aumentando drasticamente a produtividade e a padronização do código.

---

Este roadmap é um documento vivo e pode ser adaptado conforme as necessidades do projeto evoluem. Ele servirá como nosso guia para as próximas sessões de desenvolvimento.
