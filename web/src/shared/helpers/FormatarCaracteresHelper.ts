

export default class FormatarCaracteresHelper {

  // Método para formatar CPF
  formatarCPF(cpf: string): string {
    return cpf.replace(/\D/g, '').replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
  }

  // Método para formatar Telefone
  formatarTelefone(telefone: string): string {
    return telefone.replace(/\D/g, '').replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
  }

  // Método para formatar CEP
  formatarCEP(cep: string): string {
    return cep.replace(/\D/g, '').replace(/(\d{5})(\d{3})/, '$1-$2');
  }

  // Método para remover caracteres especiais de uma string
  removerTodosCaracteresEspeciais(str: string): string {
    return str.replace(/[^a-zA-Z0-9]/g, ''); // Remove qualquer caractere que não seja letra ou número
  }

  removerCaracteresEspeciais(str: string): string {
  return str.replace(/[^a-zA-Z0-9 ]/g, ''); // Remove tudo que não seja letra, número ou espaço
}
}