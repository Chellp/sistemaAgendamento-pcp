//import React from 'react';
import type { FormValues } from '../../models/interfaces/agendamentoComponentsInterface';

export type FormErrors = Partial<Record<keyof FormValues, string>>;

const validateForm = (values: FormValues): FormErrors => {
    const errors: FormErrors = {};
    if (!values.boletim) errors.boletim = 'Boletim é obrigatório';
    if (!values.cpf) errors.cpf = 'CPF é obrigatório';
    if (!values.nome) errors.nome = 'Nome é obrigatório';
    if (!values.nascimento) errors.nascimento = 'Data de nascimento é obrigatória';
    if (!values.exameSelecionado) errors.exameSelecionado = 'Tipo de exame é obrigatório';
    return errors;
}

export default validateForm;