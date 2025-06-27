import { InterfaceExames } from "./interfaces/InterfaceExame";
import ExamesDB from "../repositories/ExamesDB"; const examesDB = new ExamesDB();
import getDataHora from "../utils/getDataHora";; const getdatahora = new getDataHora();
import calcularIdade from "../utils/calcularIdade";

export default class Exames {

    private listaExames: InterfaceExames[] = examesDB.getTodosExames();

    totalExames(): number {
        return this.listaExames.length
    }

    private gerarCodExame(): number {
        return this.listaExames.length + 1
    }

    cadastrarExame(obj: InterfaceExames) {
        let novoExame: InterfaceExames = obj;
        novoExame.cod = this.gerarCodExame();
        this.listaExames.push(novoExame)

        return novoExame
    }

    gerarInfoExame(cod: number): InterfaceExames{
        let exame: InterfaceExames = this.getExameCod(cod);
        const idade = calcularIdade(exame.dtNasc);
        const dtHoraAgendada = new Date(exame.dtHoraAgendada);
        const dtAgendada = new Date(getdatahora.data(dtHoraAgendada))
        const diasRestantes = getdatahora.dataHoraPadrao().getFullYear() - getdatahora.getAno(dtAgendada)
        
        exame.idade = idade;
        exame.diasRestantes = diasRestantes;

        return exame;        
    }

    atualizarDtAgendamento(cod: number, dt: string){
        let exame: InterfaceExames = this.getExameCod(cod);
        exame.dtAgendada = dt;
        examesDB.atualizarDtAgendamento(exame);
    }

    getExameCod(cod: number): InterfaceExames { return examesDB.getExameCod(cod); }

    getExameBoletimOcorrencia(numeroBoletim: string): InterfaceExames { return examesDB.getExameBoletimOcorrencia(numeroBoletim); }

    getExamesNomePaciente(nome: string): InterfaceExames[] { return examesDB.getExamesNomePaciente(nome); }

    getExameCpfPaciente(cpf: string): InterfaceExames[] { return examesDB.getExameCpfPaciente(cpf); }

    getExamesGenero(genero: "M" | "F"): InterfaceExames[] { return examesDB.getExamesGenero(genero); }

    getExamesCidade(cidade: string): InterfaceExames[] { return examesDB.getExamesCidade(cidade); }

    getExamesEstado(estado: string): InterfaceExames[] { return examesDB.getExamesEstado(estado); }

    getExamesTipoExame(tipoExame: "Violencia Sexual" | "Lesao Corporal" | "Ad Cautelam"): InterfaceExames[] { return examesDB.getExamesTipoExame(tipoExame); }

    getExamesAtendente(atendente: string): InterfaceExames[] { return examesDB.getExamesAtendente(atendente); }

    getExamesDataAgendada(dtAgendada: string): InterfaceExames[] { return examesDB.getExamesDataAgendada(dtAgendada) }

    getExamesStatus(status: "Concluido" | "Pendente" | "Cancelado"): InterfaceExames[] { return examesDB.getExamesStatus(status); }

}