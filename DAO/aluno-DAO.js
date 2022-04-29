class AlunoDAO {
    
    constructor(db) {
        this._db = db;
    }

    async selectAlunos() {
        return await new Promise((resolve, reject) => {
            const query = (`SELECT * FROM Alunos`);
            this._db.all(query, 
                (err, rows) => {
                if (err) {
                    return reject(err);
                } else {
                    return resolve(rows);
                }
            });
        });
    }

    async selectAlunosId(id_aluno) {
        return await new Promise((resolve, reject) => {
            const query = ('SELECT * FROM Alunos WHERE id_aluno =?');
            this._db.get(query,
                [id_aluno], 
                (err, rows) => {
                    if (err) {
                       return reject(err);
                    } else {
                       return resolve(rows);
                    }
                });
        });
    };


    async insertAlunos(alunos) {
        return await new Promise((resolve, reject) => {
            const query = ('INSERT INTO Alunos (nome_completo,email,bairro,tipo_habilitacao) VALUES (?,?,?,?)');
            
            this._db.run(query,
                [alunos.nome_completo, alunos.email, alunos.bairro, alunos.tipo_habilitacao], 
                (err, rows) => {
                    if (err) {
                       return reject(err);
                    } else {
                       return resolve("Sucesso");
                    }
                });
        });

    };

    async updateAlunos(alunos,id_aluno) {
        return await new Promise((resolve, reject) => {
            const query = ('UPDATE Alunos SET nome_completo=?, email=?, bairro=?,tipo_habilitacao=? WHERE id_aluno=?')
            
            this._db.run(query,
                [alunos.nome_completo, alunos.email, alunos.bairro, alunos.tipo_habilitacao, id_aluno], 
                (err, rows) => {
                    if (err) {
                       return reject(err);
                    } else {
                       return resolve("Sucesso");
                    }
                });
        });
    }

    async deleteAlunos(id_aluno) {
       return await new Promise((resolve, reject) => {
            const query = ('DELETE FROM Alunos WHERE id_aluno=?');
            this._db.run(query,
                [id_aluno], 
                (err, rows) => {
                    if (err) {
                       return reject(err);
                    } else {
                       return resolve("Sucesso");
                    }
                });
        });


    }
}

export default AlunoDAO;