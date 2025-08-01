//Componentes Internos do Projeto
import ExameAPI from "../../shared/services/apis/apiInterna/exameAPI";
const api = new ExameAPI()
import getDataHora from "../../shared/helpers/getDataHoraHelper";
const getdatahora = new getDataHora();

export default class ExamesClass {

    async exameID(id: number){
        return await api.getId(id)
    }

    async todosExames(){
        return await api.listar()
    }

    async examesData(data: string){

    }

    async examesHoje(){
        const data =  await this.examesData(getdatahora.dataFormatada(new Date()));
    }

    async atualizarStatus(status: string){

    }
}