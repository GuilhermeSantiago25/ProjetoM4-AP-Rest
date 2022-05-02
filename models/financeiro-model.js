import Validator from "fastest-validator";

class Financeiro {
    constructor(id_financeiro, descricao, entrada, saida, validacao){
        this.id_financeiro = id_financeiro;
        this.descricao = descricao;
        this.entrada = entrada;
        this.saida = saida;
        this.validacao = validacao;
    }
    
    static validation(body){
        
        const schema = {
            id_financeiro: {type: 'string', optional: false, max: "200"},
            descricao: {type: 'string', optional: false, max: "100"},
            entrada: {type: 'numeral', optional: false,max: "100"},
            saida: {type: 'numeral', optional: false,max: "100"},
            validacao: {type: 'numeral', optional: false, max: "50"}
        }
        
        const v = new Validator();

        return v.validate(body, schema);
    }   
    
}

export default Financeiro;


    