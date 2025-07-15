export default class FiltrosHTMLComponent{
    //elementos na posição [0] é o nome do filtro
    tipoPeriodo(tipoTabela: string){
        const select: string = `
        <select name="select-${tipoTabela}-tipo" id="select-${tipoTabela}-tipo">
            <option value="select-${tipoTabela}-tipo-todos">tipo</option>
            <option value="select-${tipoTabela}-tipo-diario">diário</option>
            <option value="select-${tipoTabela}-tipo-semanal">semanal</option>
            <option value="select-${tipoTabela}-tipo-anual">anual</option>
        </select>
    `
        return select
    }

    periodo(tipoTabela: string){
        const select: string = `
        <select name="select-${tipoTabela}-data" id="select-${tipoTabela}-data">
            <option value="select-${tipoTabela}-data-todos">período</option>
            <option value="select-${tipoTabela}-data-hoje">Hoje</option>
            <option value="select-${tipoTabela}-data-seteDias">7 dias</option>
            <option value="select-${tipoTabela}-data-trintaDias">30 dias</option>
            <option value="select-${tipoTabela}-data-essaSemana">Essa Semana</option>
            <option value="select-${tipoTabela}-data-esseMes">Esse Mês</option>
            <option value="select-${tipoTabela}-data-esseAno">Esse Ano</option>
            <option value="select-${tipoTabela}-data-personalizado">personalizado</option>
        </select>
    `
        return select
    }

    ordenar(tipoTabela: string){
        const select: string = `
        <select name="select-${tipoTabela}-ordenar" id="select-${tipoTabela}-ordenar">
            <option value="select-${tipoTabela}-ordenar-recente">Mais Recente</option>
            <option value="select-${tipoTabela}-ordenar-antigo">Mais Antigo</option>
            <option value="select-${tipoTabela}-ordenar-nome">Nome</option>
        </select>
    `
        return select
    }
}