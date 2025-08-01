//Componentes Internos do Projeto
import PacienteAPI from "../../shared/services/apis/apiInterna/pacienteAPI"; 
const api = new PacienteAPI()
import getDataHora from "../../shared/helpers/getDataHoraHelper";
const getdatahora = new getDataHora();

export default class PacienteClass {

    async pacienteID(id: number){
        return await api.getId(id)
    }

    async todosPacientes(){
        return await api.listar()
    }

    async pacienteData(data: string){

    }

    async pacienteHoje(){
        const data =  await this.pacienteData(getdatahora.dataFormatada(new Date()));
    }

    async atualizarStatus(status: string){

    }
}