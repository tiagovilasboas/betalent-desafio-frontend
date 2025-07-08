// Utilitários puros - sem dependências externas
// SRP: Cada função tem uma única responsabilidade

/**
 * Formata data para o padrão brasileiro
 * SRP: Responsabilidade única - formatar data
 */
export const formatDate = (dateString: string): string => {
  return new Date(dateString).toLocaleDateString('pt-BR');
};

/**
 * Formata telefone para o padrão brasileiro
 * SRP: Responsabilidade única - formatar telefone
 */
export const formatPhone = (phone: string): string => {
  const cleaned = phone.replace(/\D/g, '');
  const match = cleaned.match(/^(\d{2})(\d{5})(\d{4})$/);
  return match ? `(${match[1]}) ${match[2]}-${match[3]}` : phone;
};

/**
 * Formata cargo para exibição
 * SRP: Responsabilidade única - formatar cargo
 */
export const formatJob = (job: string): string => {
  return job.charAt(0).toUpperCase() + job.slice(1).toLowerCase();
}; 