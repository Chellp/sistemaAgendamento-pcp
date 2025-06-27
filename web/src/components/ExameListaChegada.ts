import getDataHora from "../utils/getDataHora"; const getdatahora = new getDataHora()
import type { exameListaChegadaInterface } from "../models/exameListaChegadaInterface";
import type { InterfaceRegistros } from "../models/interfaces";

/* const examesteste: exameListaChegadaInterface[] = [];

const objteste: exameListaChegadaInterface = {
    nome: 'nomeCompleto',
    genero: 'Feminino',
    idade: 22,
    horario: '13:00',
    statusConfirmacao: false,
    statusMensagem: 'Presença Não Confirmada'
} */

export default class ExameListaChegada {

    limiteCarregamentoDeExames: number = 10;
    //data = getdatahora
    examesCarregarMais: exameListaChegadaInterface[] = [];
    listaExames: exameListaChegadaInterface[] = []


    atualizarArrayPrincipal(array: exameListaChegadaInterface[]) {
        return this.listaExames = array;
    }

    /* getExames(){
        //função que recebe os exames desestruturados
    } */

    formatarArray(): exameListaChegadaInterface[] {
        const arrayFiltrado: InterfaceRegistros[] = [];
        let arrayFormatado: exameListaChegadaInterface[] = [];

        //filtrar array aqui - array completo
        //pegar desestruturado

        for (let i of arrayFiltrado) {
            const item = {
                nome: i.nome,
                genero: i.genero,
                idade: i.idade,
                horario: i.dt_atendimento,
                statusConfirmacao: false,
                statusMensagem: 'Presença Não Confirmada'
            }
            arrayFormatado.push(item)
        }

        /* for (let i of arrayFiltrado) {
            const item = i
            }
            arrayFormatado.push(item)
        } */

        this.atualizarArrayPrincipal(arrayFormatado);
        return arrayFormatado;
    }

    // item individuas do card com o exame
    ItemLista(dados: exameListaChegadaInterface): string {

        let btnConfirmar: string = ''

        if (dados.statusConfirmacao) {
            btnConfirmar = 'confirmado'
        } else {
            btnConfirmar = 'confirmar'
        }

        const item: string = `
        <li>
            <p class="hora-nome">${dados.horario} - ${dados.nome}</p>
            <div class="genero-idade">
                <p>Gênero: ${dados.idade}</p>
                <p>Idade: 21 anos</p>
            </div>
            <div class="confirmacao-btns">
                <p>Presença Não Confirmada</p>
                <div class="btns">
                    <button class="confirmacao-btns-abrir">Abrir</button>
                    <button class="confirmacao-btns-${btnConfirmar}">${btnConfirmar}</button>
                </div>
            </div>
        </li>`


        return item;
    }

    //configurar um valor limite de agendamentos p/dia e color no parâmetro 'limite'
    AgruparItensLista(limite: number) {

        if (limite <= 0) {
            limite = this.limiteCarregamentoDeExames;
        }

        let array: exameListaChegadaInterface[] = this.formatarArray();
        let arrayPrincipal: exameListaChegadaInterface[] = array
        let listaExames: string = ''

        if (arrayPrincipal.length >= limite) {
            arrayPrincipal = array.slice(0, limite);
            this.examesCarregarMais = array.slice(limite, this.listaExames.length);
        }

        for (let i of arrayPrincipal) {
            listaExames += this.ItemLista(i);
        }

        return listaExames;

    }

    // cards agrupados em uma ul, com limite de quantidade de carregamento
    //só é chamado quando há algum exame pra ser realizado no dia
    UlExameListaChegada(data: Date): string {

        const itens: string = this.AgruparItensLista(this.limiteCarregamentoDeExames);
        const lista: string = `<ul class="lista-exames">${itens}</ul>`;

        const el: string = `
        <div class="text-area">
            <h1>Próximos Exames</h1>
            <p>data atual: ${getdatahora.dataHoraFormatoBrasil(data)}</p>
        </div>
        ${lista}`;

        return el;

    }

    //add escutadores de evento e rodapé
/*     ExamesListaChegada() {
    } */
}