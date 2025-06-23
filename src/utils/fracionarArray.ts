import { InterfaceRegistros } from "../models/interfaces";


export default class fracionarArray {
    arrayPrincipal: InterfaceRegistros[] = [];

    /*define a quantidade de registros permitidos em um intervalo
    ex: São perimitos 50 resgitros em cada intervalo (ou partição) */
    intervalo: number = 0;

    //indice que vai iniiar o recorte
    indiceInicio: number = 0;
    moduloArrayIntervalo: number = 0;

    estruturar(array: InterfaceRegistros[], limite: number) {
        this.arrayPrincipal = array;
        this.intervalo = limite;
        this.moduloArrayIntervalo = this.arrayPrincipal.length % this.intervalo;
    }

    verificarModuloArrayEIntervalo(): boolean {
        if (this.moduloArrayIntervalo > 0) {
            return true
        } else {
            return false
        }
    }

    qtdParticoes() {
        let qtd: number = 0
        qtd = this.arrayPrincipal.length / this.intervalo

        //add uma particao a mais no array que restou
        if (this.verificarModuloArrayEIntervalo()) { qtd++ }

        return qtd
    }

    //retorna
    fracionarTudo(array: InterfaceRegistros[]) {

        let count: number = 0;
        let indice: number = 0;
        let qtdParticoes = this.qtdParticoes();
        const modulo: boolean = this.verificarModuloArrayEIntervalo();

        this.arrayPrincipal = array;
        const arrayFracionado: Array<Array<InterfaceRegistros>> = []

        //diminui uma excução do 'while' se a quantidade de registros não estiver no padrão
        if (modulo) { qtdParticoes-- }

        while (qtdParticoes <= count) {
            const particao = this.arrayPrincipal.slice(indice, this.intervalo);
            arrayFracionado.push(particao)
            indice = this.intervalo++
            count++;

            // verifica se está na ultima execução do 'while'
            if (count === qtdParticoes) {
                //Encerrar o 'while' adicionando a trativa do módulo caso seja necessário

                //Se haver quantidade de registros menor que o limite será executado o 'slice' personalizado
                if (modulo) {
                    const particaoModulo = this.arrayPrincipal.slice(indice, this.intervalo);
                    arrayFracionado.push(particaoModulo)
                    indice = 0;
                }
            }
        }

        //verificar se o contador tem o mesmo valor da variavel 'qtdParticoes'
        return arrayFracionado;

    }


}