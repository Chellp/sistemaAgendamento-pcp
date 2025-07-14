import 'core-js/stable';                // Para garantir que todos os polyfills necessários estão disponíveis
import 'regenerator-runtime/runtime';   // Necessário para usar `async/await`

import express, { Request, Response } from 'express';
import cors from 'cors';
import router from './routes/index';

const app = express(); //criação de endpoints
const port = 3001

// Permite todas as origens por padrão
//app.use(cors());

// Ou se quiser especificar uma origem específica (o Vite está rodando na porta 5173)
app.use(cors({
  origin: 'http://localhost:5173',  // Frontend rodando no Vite
}));

app.use(express.json()); // permitir ler arquivos JSON

app.use(router);

//inicializar servidor
app.listen(port, () => {
  console.log(`Servidor Iniciado na porta de ${port}`);
})

