// Função para buscar a mensagem do backend
async function getMessage() {
  try {
    // Requisição usando await
    const response = await fetch('/api/saudacao');
    
    // Verificar se a resposta é bem-sucedida
    if (!response.ok) {
      throw new Error(`Erro HTTP! status: ${response.status}`);
    }

    // Parse da resposta como JSON
    const data = await response.json();
    
    // Atualiza o conteúdo da página com a mensagem
    console.log('Resposta do Backend:', data.message);
  } catch (error) {
    console.error('Erro ao buscar dados do backend:', error);
  }
}

// Chama a função para buscar a mensagem
getMessage();
