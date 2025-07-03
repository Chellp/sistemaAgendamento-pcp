import express from 'express';
import { PacienteRepository } from '../repositories/PacienteRepository';
import { PacienteController } from '../controllers/PacienteController';

const pacienteRepository = new PacienteRepository();
const pacienteController = new PacienteController(pacienteRepository);

const pacienteRouter = express.Router();

pacienteRouter.get('/', (req, res) =>  pacienteController.listar(req, res));
pacienteRouter.post('/', (req, res) => pacienteController.criar(req, res));
pacienteRouter.put('/:id', (req, res) => pacienteController.update(req, res));
pacienteRouter.delete('/:id', (req, res) => pacienteController.deletar(req, res));

export default pacienteRouter;