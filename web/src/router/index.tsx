//import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AgendamentoPrincipalPage from '../pages/Home'
import CriarAgendamentoPage from '../pages/criarAgendamentoPage'
import NotFound from '../pages/NotFound'

export default function AppRoutes() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<AgendamentoPrincipalPage />} />
            <Route path='/home' element={<AgendamentoPrincipalPage />} />
            <Route path='/novo-exame' element={<CriarAgendamentoPage />} />
            <Route path='/*' element={<NotFound />} />
        </Routes>
    </BrowserRouter>
  )
}