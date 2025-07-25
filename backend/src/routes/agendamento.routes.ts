import express from 'express';
import { AgendamentoRepository } from '../repositories/AgendamentoRepository';
import { AgendamentoController } from '../controllers/AgendamentoController';
const agRepository = new AgendamentoRepository();
const agController = new AgendamentoController(agRepository);

import { CriarAgendController } from '../controllers/CriarAgendamentoController';
import { CriarAgendRepository } from '../repositories/CriarAgendamentoRepository';
const criarAgendRepository = new CriarAgendRepository();
const criarAgendController = new CriarAgendController(criarAgendRepository);

const agRouter = express.Router();

agRouter.get('/', (req, res) =>  agController.listar(req, res));
agRouter.post('/', (req, res) => agController.criar(req, res));
agRouter.put('/:id', (req, res) => agController.update(req, res));
agRouter.delete('/:id', (req, res) => agController.deletar(req, res));

agRouter.get('/info', (req, res) =>  agController.getInfoCompleta(req, res));
agRouter.get('/info/:id', (req, res) =>  agController.getInfoCompletaID(req, res));

agRouter.post('/criar', (req, res) =>  criarAgendController.criarPaciente(req, res))
agRouter.put('/criar/:id', (req, res) =>  criarAgendController.updatePaciente(req, res))

export default agRouter;