import sqlite3 from "sqlite3";
const db = new sqlite3.Database('./database.db');

const FINANCEIRO_SCHEMA = `CREATE TABLE IF NOT EXISTS Financeiro (
            id_financceiro INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
            descricao VARCHAR(120) NOT NULL,
            entrada INTEGER(60) NOT NULL,
            saida INTEGER(60) NOT NULL,
            validacao INTEGER(60) NOT NULL
            );`;

function criaTabelaAl() {
    db.run(FINANCEIRO__SCHEMA, (error) => {
        if (error) console.log("Erro ao criar tabela do Financeiro");
    });
}

db.serialize(()=>{
    criaTabelaAl();
});

