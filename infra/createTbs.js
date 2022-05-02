import sqlite3 from "sqlite3";
const db = new sqlite3.Database('./database.db');

const ALUNOS_SCHEMA = `CREATE TABLE IF NOT EXISTS Alunos (
            id_aluno INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
            nome_completo VARCHAR(120) NOT NULL,
            email VARCHAR(60) NOT NULL,
            bairro VARCHAR(60) NOT NULL,
            tipo_habilitacao VARCHAR(20) NOT NULL
            );`;

function criaTabelaAl() {
    db.run(ALUNOS_SCHEMA, (error) => {
        if (error) console.log("Erro ao criar tabela de alunos");
    });
}
const FINANCEIRO_SCHEMA = `CREATE TABLE IF NOT EXISTS Financeiro (
    id_financceiro INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
    descricao VARCHAR(120) NOT NULL,
    entrada INTEGER(60) NOT NULL,
    saida INTEGER(60) NOT NULL,
    validacao INTEGER(60) NOT NULL
    );`;

function criaTabelaFin() {
db.run(FINANCEIRO_SCHEMA, (error) => {
if (error) console.log("Erro ao criar tabela do Financeiro");
});
}

db.serialize(()=>{
    criaTabelaAl();
    criaTabelaFin();
});