import express from 'express';
const ProdutoControler = require("../controller/ProdutoControler.js");
const ProdutoRepository = require("../repositories/ProdutoRepository.js");

const produtoRepository = new ProdutoRepository(dataService);
const produtoControler = new ProdutoControler(produtoRepository);

const admRouter = express.Router();

produtoRouter.get('/', (req, res) => produtoControler.buscarPorNome(req, res));
produtoRouter.get('/:id', (req, res) => produtoControler.listarProdutoEspecifico(req, res));
produtoRouter.post('/', authMiddleware, (req, res) => produtoControler.cadastrar(req, res));
produtoRouter.put('/:id', authMiddleware, (req, res) => produtoControler.atualizarProdutoEspecifico(req, res));
produtoRouter.delete('/:id', authMiddleware, (req, res) => produtoControler.deletar(req, res));

export default admRouter;