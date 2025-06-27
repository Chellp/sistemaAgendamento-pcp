export default function Sidebar(){
    const sidebar: string = `
    <ul class="sidebar">
        <li class="categoria-sidebar">
            <ul>
                <li class="item-principal" id="categoria-sidebar-agenda-todos">Agenda</li>
                <li id="categoria-sidebar-agenda-semana">Esta Semana</li>
                <li id="categoria-sidebar-agenda-mes">Este Mês</li>
            </ul>
        </li>
        <li class="categoria-sidebar">
            <ul>
                <li class="item-principal" id="categoria-sidebar-exames-todos">Todos os Exames</li>
                <li id="categoria-sidebar-exames-concluidos">Concluídos</li>
                <li id="categoria-sidebar-exames-pendentes">Pendentes</li>
                <li id="categoria-sidebar-exames-cancelados">Cancelados</li>
            </ul>
        </li>
        <li class="categoria-sidebar">
            <ul>
                <li class="item-principal" id="categoria-sidebar-gdl-todos">GDL</li>
                <li id="categoria-sidebar-gdl-encaminhar">Encaminhar ao GDL</li>
            </ul>
        </li>
        <li class="categoria-sidebar">
            <ul>
                <li class="item-principal" id="categoria-sidebar-relatorios-todos">Todos os Relatórios</li>
                <li id="categoria-sidebar-relatorios-diario">Diário</li>
                <li id="categoria-sidebar-relatorios-semanal">Semanal</li>
                <li id="categoria-sidebar-relatorios-mensal">Mensal</li>
                <li id="categoria-sidebar-relatorios-anual">Anual</li>
            </ul>
        </li>
    </ul>
    `;
    return sidebar;
}