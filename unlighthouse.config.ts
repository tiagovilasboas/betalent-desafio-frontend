export default {
  // URL base do site em ambiente de preview (produção)
  site: 'http://localhost:4173',

  // Define uma porta fixa para a UI do Unlighthouse para evitar conflitos
  port: 5678,

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
