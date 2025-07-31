//import React from 'react'
import { Route, Routes } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

//AGENDAMENTOS PAGES
import AgendamentoPrincipalPage from '../pages/Home/Home'
import CriarAgendamentoPage from '../pages/Agendamento/criarAgendamentoPage'
import AgendEssaSemanaPage from '../pages/Agendamento/AgendEssaSemanaPage';

//PADRÃO PAGES
import Layout from '../shared/components/Layout'
import NotFound from '../pages/NotFound'

//Interfaces
import type { LayoutProps } from '../shared/components/Layout'

export default function AppRoutes({ mode, toggleMode }: LayoutProps) {
  return (
      <Routes>
        {/* Rotas com Sidebar */}
        <Route  element={<Layout mode={mode} toggleMode={toggleMode} />}>
          <Route path="/" element={<AgendamentoPrincipalPage />} />
          <Route path="/home" element={<AgendamentoPrincipalPage />} />

          <Route path="/agendamentos"  element={<Outlet />}>
            <Route index element={<AgendamentoPrincipalPage />} />
            <Route path="novo-agendamento" element={<CriarAgendamentoPage />} />
            <Route path="todos" element={<AgendamentoPrincipalPage />} />
            <Route path="essa-semana" element={<AgendEssaSemanaPage />} />
            <Route path="esse-mes" element={<AgendamentoPrincipalPage />} />
          </Route>

          <Route path="/exames" element={<Outlet />}>
            <Route path="todos" element={<CriarAgendamentoPage />} />
            <Route path="pendentes" element={<CriarAgendamentoPage />} />
            <Route path="concluidos" element={<CriarAgendamentoPage />} />
            <Route path="cancelados" element={<CriarAgendamentoPage />} />
          </Route>

        </Route>
        {/* Rotas sem Sidebar */}
        <Route path="*" element={<NotFound />} />
      </Routes>
  );
}