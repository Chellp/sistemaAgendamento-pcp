import express from 'express';
import { AgendamentoRepository } from '../repositories/AgendamentoRepository';
import { AgendamentoController } from '../controllers/AgendamentoController';

const agRepository = new AgendamentoRepository();
const agController = new AgendamentoController(agRepository);

const agRouter = express.Router();

agRouter.get('/', (req, res) =>  agController.listar(req, res));
agRouter.post('/', (req, res) => agController.criar(req, res));
agRouter.put('/:id', (req, res) => agController.update(req, res));
agRouter.delete('/:id', (req, res) => agController.deletar(req, res));

export default agRouter;