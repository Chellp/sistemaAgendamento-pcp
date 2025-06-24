import { examesDB } from "../models/interfaces/exames";
import getDataHora from "../utils/getDataHora";
const getdatahora = new getDataHora();
import fracionarArray from "../utils/fracionarArray";
const fracionararray = new fracionarArray();
export default class ExameListaChegada {
    //data = getdatahora.
    constructor(array) {
        this.limiteCarregamentoDeExames = 10;
        this.arrayPrincipal = array;
    }
    atualizarArray(array) {
        this.arrayPrincipal = array;
    }
    getInfo() {
        let exames = examesDB.forEach(exame => {
        });
    }
    // item individuas do card com o exame
    ItemLista() {
        const item = `
        <li>
            <p class="hora-nome">13:00 - Nome Completo Paciente</p>
            <div class="genero-idade">
                <p>Gênero: Fem</p>
                <p>Idade: 21 anos</p>
            </div>
            <div class="confirmacao-btns">
                <p>Presença Não Confirmada</p>
                <div class="btns">
                    <button class="confirmacao-btns-abrir">Abrir</button>
                    <button class="confirmacao-btns-confirmar">Confirmar</button>
                </div>
            </div>
        </li>
    `;
        return item;
    }
    //configurar um valor limite de agendamentos p/dia e color no parâmetro 'limite'
    AgruparItensLista(limite = this.limiteCarregamentoDeExames) {
        const arrayFracionado = fracionararray.fracionarTudo();
        let dadosExame;
        for (let array in arrayFracionado) {
        }
    }
    // cards agrupados em uma ul, com limite de quantidade de carregamento
    //só é chamado quando há algum exame pra ser realizado no dia
    UlExameListaChegada() {
        const itens = '';
        const lista = `<ul class="lista-exames">${itens}</ul>`;
        const data = getdatahora.dataHoraPadrao();
        const el = `
        <div class="text-area">
            <h1>Próximos Exames</h1>
            <p>data atual: ${getdatahora.dataHoraFormatoBrasil(data)}</p>
        </div>
        ${lista}
    `;
        return el;
    }
    //add escutadores de evento e rodapé
    ExamesListaChegada() {
    }
}
