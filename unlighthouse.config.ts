export default {
  // URL base do site em desenvolvimento
  site: 'http://localhost:5173',

  // Configuração do scanner para não procurar por um build estático
  scanner: {
    // Não é necessário especificar o diretório `dist` para o modo de desenvolvimento
    exclude: ['/404'],
  },

  // O Unlighthouse vai se conectar ao servidor de desenvolvimento existente
  // em vez de iniciar um novo.
  server: {},

  // Configurações do cliente Unlighthouse (UI)
  client: {
    // Desativa a necessidade de uma chave de API para o modo local
    apiToken: false,
  },

  // Habilita o cache para acelerar análises futuras
  cache: true,
};
