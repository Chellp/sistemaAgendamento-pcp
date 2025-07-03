import express from 'express';
import { DiretorRepository } from '../repositories/DiretorRepository';
import { DiretorController } from '../controllers/DiretorController';

const diretorRepository = new DiretorRepository();
const diretorController = new DiretorController(diretorRepository);

const diretorRouter = express.Router();

diretorRouter.get('/', (req, res) =>  diretorController.listar(req, res));
diretorRouter.post('/', (req, res) => diretorController.criar(req, res));
diretorRouter.put('/:id', (req, res) => diretorController.update(req, res));
diretorRouter.delete('/:id', (req, res) => diretorController.deletar(req, res));

export default diretorRouter;