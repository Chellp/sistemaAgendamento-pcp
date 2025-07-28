export function validarCPF(cpf: string): boolean {
  // Remove caracteres não numéricos (como pontos e traços)
  cpf = cpf.replace(/\D/g, '');

  // Verifica se o CPF tem 11 dígitos
  if (cpf.length !== 11) return false;

  // Verifica se o CPF é uma sequência repetida (como 111.111.111-11)
  if (/^(\d)\1{10}$/.test(cpf)) return false;

  // Validação do primeiro dígito verificador
  let soma1 = 0;
  for (let i = 0; i < 9; i++) {
    soma1 += parseInt(cpf.charAt(i)) * (10 - i);
  }
  let digito1 = 11 - (soma1 % 11);
  if (digito1 === 10 || digito1 === 11) digito1 = 0;
  if (parseInt(cpf.charAt(9)) !== digito1) return false;

  // Validação do segundo dígito verificador
  let soma2 = 0;
  for (let i = 0; i < 10; i++) {
    soma2 += parseInt(cpf.charAt(i)) * (11 - i);
  }
  let digito2 = 11 - (soma2 % 11);
  if (digito2 === 10 || digito2 === 11) digito2 = 0;
  if (parseInt(cpf.charAt(10)) !== digito2) return false;

  return true;
}