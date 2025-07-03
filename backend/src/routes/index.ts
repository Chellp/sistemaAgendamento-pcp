import express from 'express';

//importação das rotas
import admRouter from './adm.routes';
import agRouter from './agendamento.routes';
import atRouter from './atendente.routes';
import diretorRouter from './diretor.routes';
import exameRouter from './exame.routes'
import examinadorRouter from './examinador.routes';
import pacienteRouter from './paciente.routes'
import perfilRouter from './perfil.routes'
/* import relatorioRouter from './relatorio.routes'
import relatorioDiarioRouter from './relatorioDiario.routes'
import relatorioSemanalRouter from './relatorioSemanal.routes'
import relatorioMensalRouter from './relatorioMensal.routes'
import relatorioAnualRouter from './relatorioAnual.routes'
 */

const router = express();

//rotas
const rota = '/api';

router.use(`${rota}/adm`, admRouter);
router.use(`${rota}/agendamento`, agRouter);
router.use(`${rota}/atendente`, atRouter);
router.use(`${rota}/diretor`, diretorRouter);
router.use(`${rota}/produtos`, exameRouter);
router.use(`${rota}/produtos`, examinadorRouter);
router.use(`${rota}/produtos`, pacienteRouter);
router.use(`${rota}/produtos`, perfilRouter);
/* router.use(`${rota}/produtos`, relatorioRouter);
router.use(`${rota}/produtos`, relatorioDiarioRouter);
router.use(`${rota}/produtos`, relatorioSemanalRouter);
router.use(`${rota}/produtos`, relatorioMensalRouter);
router.use(`${rota}/produtos`, relatorioAnualRouter); */


export default router;