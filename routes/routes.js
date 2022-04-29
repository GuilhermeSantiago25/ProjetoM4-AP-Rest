import { Router } from 'express';
import { selectAllAlunos, selectIdAlunos, insertAluno, putAlunos, patchAlunos, deleteAluno } from '../controllers/aluno-controller.js';

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

export default router;