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

  // Padrão esperado: 55 (País) + XX (DDD) + (8 ou 9 dígitos)
  // Ex: 5511987654321
  if (cleaned.length === 13 && cleaned.startsWith('55')) {
    const country = cleaned.slice(0, 2);
    const area = cleaned.slice(2, 4);
    const number = cleaned.slice(4);
    if (number.length === 9) {
      return `+${country} (${area}) ${number.slice(0, 5)}-${number.slice(5)}`;
    }
    // Lida com números de 8 dígitos se necessário
    return `+${country} (${area}) ${number.slice(0, 4)}-${number.slice(4)}`;
  }

  // Fallback para números sem o código do país (formato antigo)
  if (cleaned.length === 11) {
    const area = cleaned.slice(0, 2);
    const number = cleaned.slice(2);
    return `+55 (${area}) ${number.slice(0, 5)}-${number.slice(5)}`;
  }

  // Se não corresponder a nenhum padrão, retorna o original.
  return phone;
};

/**
 * Formata cargo para exibição
 * SRP: Responsabilidade única - formatar cargo
 */
export const formatJob = (job: string): string => {
  return job.charAt(0).toUpperCase() + job.slice(1).toLowerCase();
};

/**
 * Formata valor monetário para o padrão brasileiro
 * SRP: Responsabilidade única - formatar moeda
 */
export const formatCurrency = (value: number): string => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value);
}; 