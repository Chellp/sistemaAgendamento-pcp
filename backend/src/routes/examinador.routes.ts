import express from 'express';
import { ExaminadorRepository } from '../repositories/ExaminadorRepository';
import { ExaminadorController } from '../controllers/ExaminadorController';

const examinadorRepository = new ExaminadorRepository();
const examinadorController = new ExaminadorController(examinadorRepository);

const examinadorRouter = express.Router();

examinadorRouter.get('/', (req, res) =>  examinadorController.listar(req, res));
examinadorRouter.post('/', (req, res) => examinadorController.criar(req, res));
examinadorRouter.put('/:id', (req, res) => examinadorController.update(req, res));
examinadorRouter.delete('/:id', (req, res) => examinadorController.deletar(req, res));

export default examinadorRouter;