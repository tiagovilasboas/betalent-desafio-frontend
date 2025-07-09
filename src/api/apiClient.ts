// src/api/apiClient.ts

const API_BASE_URL = 'http://localhost:3001'

async function client<T>(endpoint: string, options?: RequestInit): Promise<T> {
  const url = `${API_BASE_URL}${endpoint}`

  try {
    const response = await fetch(url, options)

    if (!response.ok) {
      // Lança um erro com a mensagem de status para ser tratado no local da chamada
      throw new Error(`HTTP error! status: ${response.statusText}`)
    }

    return response.json()
  } catch (error) {
    console.error('API Client Error:', error)
    // Re-lança o erro para que a camada de chamada possa decidir como lidar com ele
    throw new Error(
      'Falha na comunicação com a API. Verifique a conexão e tente novamente.',
    )
  }
}

// Funções de conveniência para os métodos HTTP mais comuns
export const apiClient = {
  get: <T>(endpoint: string) => client<T>(endpoint),
  // Futuramente, podemos adicionar post, put, delete, etc.
  // post: <T>(endpoint: string, body: any) => client<T>(endpoint, { method: 'POST', body: JSON.stringify(body), headers: { 'Content-Type': 'application/json' } }),
}
