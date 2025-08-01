import express from 'express';
import { ExameRepository } from '../repositories/ExameRepository';
import { ExameController } from '../controllers/ExameController';

const exameRepository = new ExameRepository();
const exameController = new ExameController(exameRepository);

const exameRouter = express.Router();

exameRouter.get('/', (req, res) =>  exameController.listar(req, res));
exameRouter.post('/', (req, res) => exameController.criar(req, res));
exameRouter.put('/:id', (req, res) => exameController.update(req, res));
exameRouter.get('/:id', (req, res) => exameController.getID(req, res));
exameRouter.delete('/:id', (req, res) => exameController.deletar(req, res));

export default exameRouter;