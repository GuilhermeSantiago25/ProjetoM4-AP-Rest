import sqlite3 from "sqlite3";
const db = new sqlite3.Database('./infra/database.db');

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
const FUNCIONARIOS_SCHEMA = `CREATE TABLE IF NOT EXISTS funcionarios (
    id_funcionario INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
    Nomecompleto VARCHAR(120) NOT NULL,
    Email VARCHAR(80) NOT NULL,
    Celular INT(15) NOT NULL,
    Cargo VARCHAR(45) NOT NULL,
    Bairro VARCHAR(45) NOT NULL,
    Periodo VARCHAR(45) NOT NULL,
    Admissão DATE NOT NULL
    );`;

function criaTabelaFunc() {
db.run(FUNCIONARIOS_SCHEMA, (error) => {
if (error) console.log("Erro ao criar tabela de funcionarios");
});
}

db.serialize(()=>{
    criaTabelaAl();
    criaTabelaFunc();
});