import AgendamentoAPI from "../api/agendamentoAPI"; const agApi = new AgendamentoAPI();
import getDataHora from "../utils/getDataHora"; const getdatahora = new getDataHora()
import calcularIdade from "../utils/calcularIdade";

export default async function ExameListaChegada(lista: any[]) {
    const examesConfirmados = new CarregarExames('Confirmados', lista)
    const examesChegada = new CarregarExames('Próximos Exames', lista)
    const data = getdatahora.dataAtual()
    let conteudo = await examesConfirmados.UlExameListaChegada(getdatahora.formatoBrasil(data), 'chegada')
    conteudo += examesChegada.UlExameListaChegada(getdatahora.formatoBrasil(data), 'confirmados')
    eventos()
    return conteudo
}

class CarregarExames {

    limiteCarregamentoDeExames: number = 10;
    listaExames: any[] = []
    titulo: string

    constructor(titulo: string, listaExames: any[]) {
        this.titulo = titulo
        this.listaExames = listaExames
    }

    atualizarListaExames(array: any[]) {
        return this.listaExames = array;
    }

    limparListagem(id: string) {
        const lista = document.getElementById(`${id}`)
        if (lista) {
            lista.innerHTML = ''
        }
    }

    // Função que extrai informações necessárias para esse tipo de listagem
    async extrairInfoAgendamento() {
        const exames: any[] = this.listaExames;
        let arrayFormatado: any[] = [];

        for (let i of exames) {
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

        this.atualizarListaExames(arrayFormatado);
        return arrayFormatado;
    }

    // cria o HTML para cada item da lista de exames
    ItemLista(dados: any): string {

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
                    <button class="btn-abrir">Abrir</button>
                    <button class="btn-${btnConfirmar}" data-id="${dados.id}">${btnConfirmar}</button>
                </div>
            </div>
        </li>`


        return item;
    }

    //configurar um valor limite de agendamentos p/dia e color no parâmetro 'limite'
    async AgruparporQTD(limite: number = 10) {

        //verifica se o limite do intervalo é menor ou igual a zero
        if (limite <= 0) {
            limite = this.limiteCarregamentoDeExames;
        }

        //recebe array com as informações necessárias e salva as modificações no 'arrayPrincipal'
        let array = await this.extrairInfoAgendamento();
        let arrayPrincipal: any[] = array
        let lista: string = ''

        //recorta para ficar dentro do limite estabelecido
        if (arrayPrincipal.length >= limite) {
            arrayPrincipal = array.slice(0, limite);
            //armazena o excedente
            this.listaExames = array.slice(limite, this.listaExames.length);
        }

        for (let i of arrayPrincipal) {
            lista += this.ItemLista(i);
        }

        return lista;
    }

    // cards agrupados em uma ul, com limite de quantidade de carregamento
    //só é chamado quando há algum exame pra ser realizado no dia
    async UlExameListaChegada(data: string, id: string) {

        const itens: string = await this.AgruparporQTD(this.limiteCarregamentoDeExames);
        const lista: string = `<ul class="lista-exames-${id}">${itens}</ul>`;

        const el: string = `
        <div class="text-area">
            <h1>${this.titulo}</h1>
            <p>data atual: ${data}</p>
        </div>
        ${lista}`;

        return el;
    }
}

async function atualizarListaConfirmados(id: number) {

    const lista = document.getElementById("area-lista-chegada-confirmado")

    const { data_agendamento, nome_completo, dt_nasc, genero } = await agApi.getInfoCompletaID(id)
    const idade = calcularIdade(dt_nasc)

    const item: string = `
        <li>
            <p class="hora-nome">${data_agendamento} - ${nome_completo}</p>
            <div class="genero-idade">
                <p>Gênero: ${genero}</p>
                <p>Idade: ${idade}</p>
            </div>
            <div class="confirmacao-btns">
                <p>Confirmada</p>
                <div class="btns">
                    <button class="btn-abrir" id="lista-exames-btn-abrir-confirmado">Abrir</button>
                </div>
            </div>
        </li>`;

    if (lista) {
        lista.innerHTML += item;
    }

    eventos()

}

function eventos() {
    const btns_confirmacao = document.querySelectorAll('.confirmacao-btns-confirmar')
    btns_confirmacao.forEach((btn) => {
        btn.addEventListener('click', (event) => {
            event.preventDefault();
            // Usando type assertion para garantir que o target seja um HTMLLIElement
            const btnClicado = event.target as HTMLButtonElement;;

            // Verifica se o btnClicado existe e tem dataset.id
            if (btnClicado && btnClicado.dataset.id) {

                const exameID = parseInt(btnClicado.dataset.id, 10);
                const idClicado = btnClicado.id;
                const li = document.getElementById(`item-lista-${idClicado}`);

                if (li) {
                    li.classList.toggle('confirmado');
                }

                btnClicado.classList.toggle('ativo');

                atualizarListaConfirmados(exameID)
            }
        })
    })
}