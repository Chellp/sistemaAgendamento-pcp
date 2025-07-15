export default class getDataHora{

    dataAtual(): Date{
        const dataFormatada = new Date();
        return dataFormatada;
    }

    dataFormatada(data: Date): string{
        const dataFormatada = data.toLocaleDateString();
        return dataFormatada;
    }

    hora(data: Date): string{
        const hora = `${this.getHoras(data)}:${this.getMinutos(data)}`
        return hora;
    }

    dataHoraUTC(): string{
        const dataHoraUTC = new Date().toISOString()
        return dataHoraUTC;
    }

    getDia(data: Date): number{
        return data.getDay();
    }

    getMes(data: Date): number{
        return data.getMonth();
    }

    getAno(data: Date): number{
        return data.getFullYear();
    }

    getHoras(data: Date): number{
        return data.getHours();
    }

    getMinutos(data: Date): number{
        return data.getMinutes();
    }

    getSegundos(data: Date): number{
        return data.getSeconds();
    }

    //combinação de métodos "<valor>.toString().padStart()" para formatar com 2 dígitos
    formatarStringPadstart(valor: number): string{
        return valor.toString().padStart(2, '0');
    }

    formatoBrasil(data: Date): string{

        const dia = this.formatarStringPadstart(this.getDia(data));
        const mes = this.formatarStringPadstart(this.getMes(data));
        const ano = this.formatarStringPadstart(this.getAno(data));

        const dataFormatada: string = `${dia}/${mes}/${ano}`;
        
        return dataFormatada;
    }
}