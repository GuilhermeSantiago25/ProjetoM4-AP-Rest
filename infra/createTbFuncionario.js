import sqlite3 from "sqlite3";
const db = new sqlite3.Database('./database.db');

const FUNCIONARIOS_SCHEMA = `CREATE TABLE IF NOT EXISTS funcionarios (
            id_funcionario INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
            nome_completo VARCHAR(120) NOT NULL,
            email VARCHAR(60) NOT NULL,
            celular VARCHAR(20) NOT NULL,
            cargo VARCHAR(60) NOT NULL,
            bairro VARCHAR(60) NOT NULL,
            Periodo VARCHAR (60) NOT NULL
            admissão VARCHAR(20) NOT NULL
            );`;

function criaTabelaAl() {
    db.run(FUNCIONARIOS_SCHEMA, (error) => {
        if (error) console.log("Erro ao criar tabela de funcionarios");
    });
}

db.serialize(()=>{
    criaTabelaAl();
});