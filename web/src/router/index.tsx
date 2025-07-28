//import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

//AGENDAMENTOS PAGES
import AgendamentoPrincipalPage from '../pages/Home/Home'
import CriarAgendamentoPage from '../pages/Agendamento/criarAgendamentoPage'
import ConfirmAgendamentoComponent from '../pages/Agendamento/ConfirmAgendamentoComponent'

//PADRÃO PAGES
import NotFound from '../pages/NotFound'

export default function AppRoutes() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<AgendamentoPrincipalPage />} />
            <Route path='/home' element={<AgendamentoPrincipalPage />} />

            <Route path='/agendamentos' element={<AgendamentoPrincipalPage />} />
            <Route path='/agendamentos/novo-agendamento' element={<CriarAgendamentoPage />} />
            {/* <Route path='/agendamentos/novo-agendamento/confirmar' element={<CriarAgendamentoPage />} /> */}
            <Route path='/agendamentos/todos' element={<AgendamentoPrincipalPage />} />
            <Route path='/agendamentos/essa-semana' element={<AgendamentoPrincipalPage />} />
            <Route path='/agendamentos/esse-mes' element={<AgendamentoPrincipalPage />} />

            <Route path='/exames/pendentes' element={<CriarAgendamentoPage />} />
            <Route path='/exames/concluidos' element={<CriarAgendamentoPage />} />
            <Route path='/exames/cancelados' element={<CriarAgendamentoPage />} />
            <Route path='/*' element={<NotFound />} />
        </Routes>
    </BrowserRouter>
  )
}