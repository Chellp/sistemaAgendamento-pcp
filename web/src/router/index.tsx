import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AgendamentoPrincipalPage from '../pages/AgendamentoPrincipalPage'
import NotFound from '../pages/NotFound'

export default function AppRoutes() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<AgendamentoPrincipalPage />} />
            <Route path='/novo-exame' element={<NotFound />} />
        </Routes>
    </BrowserRouter>
  )
}