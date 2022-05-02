import { Router } from 'express';
import { selectAllAlunos, selectIdAlunos, insertAluno, putAlunos, patchAlunos, deleteAluno } from '../controllers/aluno-controller.js';
import { selectAllFuncionario, selectIdFuncionario, insertFuncionarios, putFuncionario, patchFuncionario, deleteFuncionario } from '../controllers/funcionario-controllers.js';
import { selectAllFinanceiro, selectIdFinaneiro, insertFinanceiro, putFinanceiro, patchFinanceiro, deleteFinanceiro } from '../controllers/financeiro-controller.js';

const router = Router();

router.get('/', (req,res)=>{
    res.json({
        "statusCode": 200,
        "msg": "Api Rodando"

    });
});

router.get('/alunos', selectAllAlunos);
router.get('/alunos/:id_aluno', selectIdAlunos);
router.post('/alunos', insertAluno);
router.put('/alunos/:id_aluno',putAlunos);
router.patch('/alunos/:id_aluno',patchAlunos);
router.delete('/alunos/:id_aluno', deleteAluno);

router.get('/funcionarios', selectAllFuncionario);
router.get('/funcionarios/:id_funcionario', selectIdFuncionario);
router.post('/funcionarios', insertFuncionarios);
router.put('/funcionarios/:id_funcionario',putFuncionario);
router.patch('/funcionarios/:id_funcionario',patchFuncionario);
router.delete('/funcionarios/:id_funcionario', deleteFuncionario);

router.get('/financeiro', selectAllFinanceiro);
router.get('/financeiro/:id_aluno', selectIdFinaneiro);
router.post('/financeiro', insertFinanceiro);
router.put('/financeiro/:id_aluno',putFinanceiro);
router.patch('/financeiro/:id_aluno',patchFinanceiro);
router.delete('/financeiro/:id_aluno', deleteFinanceiro);

export default router;

