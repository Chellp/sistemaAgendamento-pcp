export default class fracionarArray {
    constructor() {
        this.arrayPrincipal = [];
        /*define a quantidade de registros permitidos em um intervalo
        ex: São perimitos 50 resgitros em cada intervalo (ou partição) */
        this.intervalo = 0;
        //indice que vai iniiar o recorte
        this.indiceInicio = 0; //índice de uso global
        this.moduloArrayIntervalo = 0;
    }
    estruturar(array, limite) {
        this.arrayPrincipal = array;
        this.intervalo = limite;
        this.moduloArrayIntervalo = this.arrayPrincipal.length % this.intervalo;
    }
    atualizarLimiteIntervalo(limite) {
        this.intervalo = limite;
    }
    atualizarArray(array) {
        this.arrayPrincipal = array;
    }
    verificarModuloArrayEIntervalo() {
        if (this.moduloArrayIntervalo > 0) {
            return true;
        }
        else {
            return false;
        }
    }
    qtdParticoes() {
        let qtd = 0;
        qtd = this.arrayPrincipal.length / this.intervalo;
        //add uma particao a mais no array que restou
        if (this.verificarModuloArrayEIntervalo()) {
            qtd++;
        }
        return qtd;
    }
    recortarArray(parte = 1, add1 = false) {
        let arrayFracionado = [];
        const qtdParticoesPermitidas = this.qtdParticoes();
        let indice = this.intervalo * parte;
        if (add1) {
            indice++;
        }
        //verificar se o pedaço do array que vai ser recortado excede a qtd de recortes permitidos nesse array
        if (parte <= qtdParticoesPermitidas) {
            arrayFracionado = this.arrayPrincipal.slice(indice, this.intervalo);
        }
        return arrayFracionado;
    }
    //retorna
    fracionarTudo() {
        let count = 0;
        let indice = 0;
        let qtdParticoes = this.qtdParticoes();
        const modulo = this.verificarModuloArrayEIntervalo();
        const arrayFracionado = [];
        //diminui uma excução do 'while' se a quantidade de registros não estiver no padrão
        if (modulo) {
            qtdParticoes--;
        }
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
                    arrayFracionado.push(particaoModulo);
                    indice = 0;
                }
            }
        }
        //verificar se o contador tem o mesmo valor da variavel 'qtdParticoes'
        return arrayFracionado;
    }
}
