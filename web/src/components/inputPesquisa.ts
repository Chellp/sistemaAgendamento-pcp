export class InputPesquisa{

    idPadrao: string = 'input-pesquisa';
    valueOptios: string[] = ['-exames', '-paciente', '-nome', '-cpf', '-boletim'];

    private eventos(){
        
    }

    input(): string{

        let itensSelect: string = ''; 
        
        for(let i of this.valueOptios){
            if(i === 'exames'){
                itensSelect += `<option value="${i}" id="${this.idPadrao}${i}" selected>${i}</option>`
            }  else {
                itensSelect += `<option value="${i}" id="${this.idPadrao}${i}">${i}</option>`
            }
        }

        const input: string = `
        <div class="${this.idPadrao}">
            <select name="input-pesquisa" id="input-pesquisa">${itensSelect}</select>

            <div class="pesquisa">
                <input type="text">
                <img src="./assets/img/icon/search-sharp.svg" alt="">
            </div>
        </div>
        `

        return input;
    }

}