class FinanceiroDAO {
    
    constructor(db) {
        this._db = db;
    }

    async selectFinanceiro() {
        return await new Promise((resolve, reject) => {
            const query = (`SELECT * FROM Financeiro`);
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

    async selectidFinanceiro(id_financeiro) {
        return await new Promise((resolve, reject) => {
            const query = ('SELECT * FROM Financeiro WHERE id_financeiro =?');
            const data = [id_financeiro];
            this._db.get(query,data, (err, rows) => {
                    if (err) {
                       return reject(err);
                    } else {
                       return resolve(rows);
                    }
                });
        });
    };


    async insertFinanceiro(financeiro) {
        return await new Promise((resolve, reject) => {
            const query = ('INSERT INTO Financeiro (descricao, entrada, saida, validacao) VALUES (?,?,?,?)');
            const data = [financeiro.descricao, financeiro.entrada, financeiro.saida, financeiro.validacao];
            this._db.run(query, data, (err, rows) => {
                    if (err) {
                       return reject(err);
                    } else {
                       return resolve("Sucesso");
                    }
                });
        });

    };

    async updateFinanceiro(financeiro,id_financeiro) {
        return await new Promise((resolve, reject) => {
            const query = ('UPDATE Financeiro SET descricao=?, entrada=?, saida=?, validacao=? WHERE id_financeiro=?')
            const data = [financeiro.descricao, financeiro.entrada, financeiro.saida, financeiro.validacao, id_financeiro];
            this._db.run(query,data,(err, rows) => {
                    if (err) {
                       return reject(err);
                    } else {
                       return resolve("Sucesso");
                    }
                });
        });
    }

    async deleteFinanceiro(id_financeiro) {
       return await new Promise((resolve, reject) => {
            const query = ('DELETE FROM Financeiro WHERE id_financeiro=?');
            const data = [id_financeiro];
            this._db.run(query,data, (err, rows) => {
                    if (err) {
                       return reject(err);
                    } else {
                       return resolve("Sucesso");
                    }
                });
        });


    }
}

export default FinanceiroDAO;