import express from 'express';
import { AtendenteRepository } from '../repositories/AtendenteRepository';
import { AtendenteController } from '../controllers/AtendenteController';

const atRepository = new AtendenteRepository();
const atController = new AtendenteController(atRepository);

const atRouter = express.Router();

atRouter.get('/', (req, res) =>  atController.listar(req, res));
atRouter.post('/', (req, res) => atController.criar(req, res));
atRouter.put('/:id', (req, res) => atController.update(req, res));
atRouter.delete('/:id', (req, res) => atController.deletar(req, res));

export default atRouter;