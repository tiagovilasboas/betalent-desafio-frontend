export default {
  // URL base do site em ambiente de preview (produção)
  site: 'http://localhost:4173',

  scanner: {
    // Não é necessário especificar o diretório `dist` se estamos auditando um servidor em execução
    exclude: ['/404'],
  },

  // O Unlighthouse vai se conectar ao servidor de preview existente
  server: {},

  client: {
    apiToken: false,
  },

  cache: true,
};
