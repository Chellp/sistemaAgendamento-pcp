//import React from 'react';
import type { FormValues } from "../../../models/interfaces/agendamentoComponentsInterface";
import { validarCPF } from "../../utils/validators/validarCPF";

export type FormErrors = Partial<Record<keyof FormValues, string>>;

const validateForm = (values: FormValues): FormErrors => {
    const errors: FormErrors = {};
    if (!values.boletim) errors.boletim = 'Boletim é obrigatório';
    if (!values.cpf) errors.cpf = 'CPF é obrigatório';
    if (!validarCPF(values.cpf)) errors.cpf = 'CPF inválido';
    if (!values.nome) errors.nome = 'Nome é obrigatório';
    if (!values.dt_nasc) errors.dt_nasc = 'Data de nascimento é obrigatória';
    if (!values.endereco) errors.endereco = 'Endereço é obrigatório';
    if (!values.telefone) errors.telefone = 'Telefone é obrigatório';
    if (!values.exameSelecionado) errors.exameSelecionado = 'Tipo de exame é obrigatório';
    return errors;
}

export default validateForm;