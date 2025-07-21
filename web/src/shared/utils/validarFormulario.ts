//import React from 'react';
import { Dayjs } from 'dayjs';

export type FormValues = {
    boletim: string;
    nome: string;
    nascimento: Dayjs | null;
    observacoes: string;
    exameSelecionado: string;
};

export type FormErrors = Partial<Record<keyof FormValues, string>>;

const validateForm = (values: FormValues): FormErrors => {
    const errors: FormErrors = {};
    if (!values.boletim) errors.boletim = 'Boletim é obrigatório';
    if (!values.nome) errors.nome = 'Nome é obrigatório';
    if (!values.nascimento) errors.nascimento = 'Data de nascimento é obrigatória';
    return errors;
}

export default validateForm;