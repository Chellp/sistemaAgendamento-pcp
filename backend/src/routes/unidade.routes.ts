import express from 'express';
import { UnidadeRepository } from '../repositories/UnidadeRepository';
import { UnidadeController } from '../controllers/UnidadeController';

const unidadeRepository = new UnidadeRepository();
const unidadeController = new UnidadeController(unidadeRepository);

const unidadeRouter = express.Router();

unidadeRouter.get('/', (req, res) =>  unidadeController.listar(req, res));
unidadeRouter.post('/', (req, res) => unidadeController.criar(req, res));
unidadeRouter.put('/:id', (req, res) => unidadeController.update(req, res));
unidadeRouter.delete('/:id', (req, res) => unidadeController.deletar(req, res));

export default unidadeRouter;