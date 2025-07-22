
export default class validarCaracteresHelper {

  Nome(nome: string): boolean {
    const regex = /^[a-zA-Záàãâäéèêëíìîïóòôõöúùûüç\s]{1,100}$/;
    return regex.test(nome);
  }

  CPF(cpf: string): boolean {
    const regex = /^[0-9]{3}\.[0-9]{3}\.[0-9]{3}-[0-9]{2}$/;
    return regex.test(cpf);
  }

  Telefone(telefone: string): boolean {
    const regex = /^\(\d{2}\) \d{5}-\d{4}$/;
    return regex.test(telefone);
  }

  BoletimOcorrencia(bo: string): boolean {
    const regex = /^\d{7}\/\d{4}$/;
    return regex.test(bo);
  }

  CEP(cep: string): boolean {
    const regex = /^\d{5}-\d{3}$/;
    return regex.test(cep);
  }

  Data(data: string): boolean {
    const regex = /^(19|20)\d\d-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/;
    return regex.test(data);
  }

  DataBrasil(data: string): boolean {
    const regex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/(19|20)\d\d$/;
    return regex.test(data);
  }

  Hora(hora: string): boolean {
    const regex = /^([01][0-9]|2[0-3]):([0-5][0-9])$/;
    return regex.test(hora);
  }

}