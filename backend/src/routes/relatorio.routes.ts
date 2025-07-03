import express from 'express';
import { PerfilRepository } from '../repositories/PerfilRepository';
import { PerfilController } from '../controllers/PerfilController';

const perfilRepository = new PerfilRepository();
const perfilController = new PerfilController(perfilRepository);

const perfilRouter = express.Router();

perfilRouter.get('/', (req, res) =>  perfilController.listar(req, res));
perfilRouter.post('/', (req, res) => perfilController.criar(req, res));
perfilRouter.put('/:id', (req, res) => perfilController.update(req, res));
perfilRouter.delete('/:id', (req, res) => perfilController.deletar(req, res));

export default perfilRouter;