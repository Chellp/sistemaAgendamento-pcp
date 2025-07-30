import { Toolbar } from "@mui/material"

export default function NotFound() {

  alert('Página não Encontrada!')

  return (
    <>
      <Toolbar />
      <div>
        <h1>Página não encontrada</h1>
        <p>Desculpe, a página que você está procurando não existe.</p>
      </div></>
  )
}