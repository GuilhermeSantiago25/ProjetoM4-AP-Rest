import FinanceiroDAO from "../DAO/financeiro-DAO.js";
import FinanceiroModel from "../models/financeiro-model.js";
import db from "../infra/configDb.js";

export async function selectAllFinanceiro(req, res) {
    const financeiroDAO = new FinanceiroDAO(db);
    financeiroDAO.selectFinanceiro()
        .then((result) => {
            res.status(200).json(result);
        })
        .catch((err) => {
            res.status(400).json(err);
        });
}

export async function selectIdFinaneiro(req, res) {
    const financeiroDAO = new FinanceiroDAO(db);
    const {
        id_finceiro
    } = req.params;
    financeiroDAO.selectIdFinaneiro(id_finceiro)
        .then((result) => {
            res.status(200).json(result);
        })
        .catch((err) => {
            res.status(400).json(err);
        });
}

export async function insertFinanceiro(req, res) {
    const financeiroDAO = new FinanceiroDAO(db);
    const body = req.body;
    const newFinanceiro = new FinanceiroModel(body.descricao, body.entrada, body.saida, body.validacao);

    const validationResponse = FinanceiroModel.validation(body);

    if (!validationResponse) {
        return res.status(400).json({
            message: 'Validation failed',
            errors: validationResponse
        });
    }

    financeiroDAO.insertFinanceiro(newFinanceiro)
        .then((result) => {
            res.status(201).json(result)
        })
        .catch((err) => {
            res.status(400).json(err)
        });
}

export async function putFinanceiro(req, res) {
    const financeiroDAO = new FinanceiroDAO(db);
    const body = req.body;
    const {
        id_financeiro
    } = req.params;
    const putFinanceiro = new FinanceiroModel(body.descricao, body.entrada, body.saida, body.validacao);

    const validationResponse = FinanceiroModel.validation(body);

    if (!validationResponse) {
        return res.status(400).json({
            message: 'Validation failed',
            errors: validationResponse
        });
    }

    financeiroDAO
        .updateFinanceiro(putFinanceiro, id_financeiro)
        .then((result) => {
            res.status(200).json(result)
        })
        .catch((error) => {
            res.status(400).json(error)
        });
}

export async function deleteFinanceiro(req, res) {
    const financeiroDao = new FinanceiroDAO(db);
    const {
        id_financeiro
    } = req.params;

    financeiroDao.deleteFinanceiro(id_financeiro)
        .then((result) => {
            res.status(200).json(result);
        })
        .catch((error) => {
            res.status(400).json(error);
        });
}