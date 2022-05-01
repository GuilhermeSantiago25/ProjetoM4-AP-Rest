import sqlite3 from "sqlite3";
const db = new sqlite3.Database('.infra/database.db');

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

db.serialize(()=>{
    criaTabelaAl();
});