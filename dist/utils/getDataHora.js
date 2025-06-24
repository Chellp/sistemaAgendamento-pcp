export default class getDataHora {
    data() {
        const data = new Date().toLocaleDateString();
        return data;
    }
    dataHoraPadrao() {
        const dataHoraAtual = new Date();
        return dataHoraAtual;
    }
    dataHoraUTC() {
        const dataHoraUTC = new Date().toISOString();
        return dataHoraUTC;
    }
    getDia(data) {
        return data.getDay();
    }
    getMes(data) {
        return data.getMonth();
    }
    getAno(data) {
        return data.getFullYear();
    }
    getHoras(data) {
        return data.getHours();
    }
    getMinutos(data) {
        return data.getMinutes();
    }
    getSegundos(data) {
        return data.getSeconds();
    }
    //combinação de métodos "<valor>.toString().padStart()" para formatar com 2 dígitos
    formatarStringPadstart(valor) {
        return valor.toString().padStart(2, '0');
    }
    dataHoraFormatoBrasil(data) {
        const dia = this.formatarStringPadstart(this.getDia(data));
        const mes = this.formatarStringPadstart(this.getMes(data));
        const ano = this.formatarStringPadstart(this.getAno(data));
        const dataFormatada = `${dia}/${mes}/${ano}`;
        return dataFormatada;
    }
}
