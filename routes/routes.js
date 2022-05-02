import { Router } from 'express';
import { selectAllAlunos, selectIdAlunos, insertAluno, putAlunos, patchAlunos, deleteAluno } from '../controllers/aluno-controller.js';
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

router.get('/financeiro', selectAllFinanceiro);
router.get('/financeiro/:id_aluno', selectIdFinaneiro);
router.post('/financeiro', insertFinanceiro);
router.put('/financeiro/:id_aluno',putFinanceiro);
router.patch('/financeiro/:id_aluno',patchFinanceiro);
router.delete('/financeiro/:id_aluno', deleteFinanceiro);

export default router;

