import express from 'express';
import router from './routes/index'

const app = express(); //criação de endpoints
app.use(express.json()); // permitir ler arquivos JSON
app.use(router);

//inicializar servidor
app.listen(3000, () => {
    console.log('Servidor Iniciado na porta de 3000');
})