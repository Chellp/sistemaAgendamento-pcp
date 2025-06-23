export default function Header(){
    const header: string = `
        <header class="navbar">
            <div class="logo-perfil">
                <a href="#" class="logo-header">
                    <img src="../img/logo.png" alt="">
                </a>
                <h1>Secretaria</h1>
            </div>
            <nav>
                <div class="input-pesquisa">
                    <select name="input-pesquisa" id="input-pesquisa">
                        <option value="exames" selected>exames</option>
                        <option value="paciente">exames</option>
                        <option value="nome">exames</option>
                        <option value="cpf">exames</option>
                        <option value="boletim">exames</option>
                    </select>

                    <div class="pesquisa">
                        <input type="text">
                        <img src="../img/icon/search-sharp.svg" alt="">
                    </div>
                </div>

                <ul class="links-navbar">
                    <li><img src="../img/icon/notifications-sharp-white.png" alt=""></li>
                    <li><img src="../img/icon/settings-sharp-white.png" alt=""></li>
                </ul>
            </nav>
        </header>
    `;

    return header;
}