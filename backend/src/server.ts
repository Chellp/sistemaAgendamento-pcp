import 'core-js/stable';          // Para garantir que todos os polyfills necessários estão disponíveis
import 'regenerator-runtime/runtime';  // Necessário para usar `async/await`


import express, { Request, Response } from 'express';
//import router from './routes/index';
import cors from 'cors';

const app = express(); //criação de endpoints

// Permite todas as origens por padrão
//app.use(cors());

// Ou se quiser especificar uma origem específica (o Vite está rodando na porta 5173)
app.use(cors({
  origin: 'http://localhost:5173',  // Frontend rodando no Vite
}));

app.use(express.json()); // permitir ler arquivos JSON

// Definindo a rota do backend
app.get('/api/message', (req: Request, res: Response) => {
  res.json({ message: 'Olá do backend!' });
});

//app.use(router);

//inicializar servidor
app.listen(3001, () => {
  console.log('Servidor Iniciado na porta de 3001');
})
