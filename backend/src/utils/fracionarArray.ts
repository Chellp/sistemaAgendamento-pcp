import { InterfaceRegistros } from "../models/interfaces/interfaces";


export default class fracionarArray {
    arrayPrincipal: InterfaceRegistros[] = [];

    /*define a quantidade de registros permitidos em um intervalo
    ex: São perimitos 50 resgitros em cada intervalo (ou partição) */
    intervalo: number = 0;

    //indice que vai iniiar o recorte
    indiceInicio: number = 0; //índice de uso global
    moduloArrayIntervalo: number = 0;

    estruturar(array: InterfaceRegistros[], limite: number): void{
        this.arrayPrincipal = array;
        this.intervalo = limite;
        this.moduloArrayIntervalo = this.arrayPrincipal.length % this.intervalo;
    }

    atualizarLimiteIntervalo(limite: number): void{
        this.intervalo = limite;
    }

    atualizarArray(array: InterfaceRegistros[]): void{
        this.arrayPrincipal = array;
    }

    verificarModuloArrayEIntervalo(): boolean {
        if (this.moduloArrayIntervalo > 0) {
            return true
        } else {
            return false
        }
    }

    qtdParticoes(): number {
        let qtd: number = 0
        qtd = this.arrayPrincipal.length / this.intervalo

        //add uma particao a mais no array que restou
        if (this.verificarModuloArrayEIntervalo()) { qtd++ }

        return qtd
    }

    recortarArray(parte: number = 1, add1: boolean = false): InterfaceRegistros[]{

        let arrayFracionado: InterfaceRegistros[] = [];
        const qtdParticoesPermitidas: number = this.qtdParticoes();
        let indice: number = this.intervalo * parte

        if(add1){indice ++;}

        //verificar se o pedaço do array que vai ser recortado excede a qtd de recortes permitidos nesse array
        if(parte <= qtdParticoesPermitidas){
            arrayFracionado = this.arrayPrincipal.slice(indice, this.intervalo)
        }

        return arrayFracionado
    }

    //retorna
    fracionarTudo(): InterfaceRegistros[] {

        let count: number = 0;
        let indice: number = 0;
        let qtdParticoes = this.qtdParticoes();
        const modulo: boolean = this.verificarModuloArrayEIntervalo();

        const arrayFracionado: InterfaceRegistros[] = [];

        //diminui uma excução do 'while' se a quantidade de registros não estiver no padrão
        if (modulo) { qtdParticoes-- }

        while (qtdParticoes <= count) {
            const particao = this.arrayPrincipal.slice(indice, this.intervalo);
            arrayFracionado.push(particao);
            indice = this.intervalo++;
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