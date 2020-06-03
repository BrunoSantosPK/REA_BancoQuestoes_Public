const cliente = require("../database/conect");
const dbName = "questoes";
const quimicaCollection = "quimica";

const sortear = require("../utils/sorteiro");
const contarTopicos = require("../utils/selecionarTopicos");

module.exports = {

    async buscarTodas(request, response) {
        try {
            await cliente.connect();

            const colecao = cliente.db(dbName).collection(quimicaCollection);
            const data = await colecao.find({}).toArray();

            return response.json({
                sucesso: true,
                questoes: data
            });
        } catch(erro) {
            console.log(erro);
        }

        cliente.close();

        return response.json({
            sucesso: false,
            questoes: []
        });
    },

    async selecionarBateria(request, response) {
        const { topico, total } = request.query;
        let buscador = {};
        if(topico != "todos") {
            buscador = { topico };
        }

        try {
            await cliente.connect();
            const colecao = cliente.db(dbName).collection(quimicaCollection);

            const data = await colecao.find(buscador).toArray();
            const selecao = sortear(data, total);

            return response.json({
                statusCode: 200,
                questoes: selecao
            });
        } catch(erro) {
            console.log(erro);
        }

        cliente.close();

        return response.json({
            statusCode: 400,
            error: "Erro de conexão com o servidor."
        });
    },

    async topicosCadastrados(request, response) {
        try {
            await cliente.connect();
            const colecao = cliente.db(dbName).collection(quimicaCollection);

            const data = await colecao.find({}).toArray();
            const topicos = contarTopicos(data);

            return response.json({
                statusCode: 200,
                cadastros: topicos
            });
        } catch(erro) {
            console.log(erro);
        }

        cliente.close();

        return response.json({
            statusCode: 400,
            error: "Erro de conexão com o servidor."
        });
    },

    async inserirQuestao(request, response) {
        const { descricao, opcao_1, opcao_2, opcao_3, opcao_4, resposta, comentario, dificuldade, topico } = request.body;
        const jsonQuestao = { descricao, opcao_1, opcao_2, opcao_3, opcao_4, resposta, comentario, dificuldade, topico };
        
        try {
            await cliente.connect();
            const res = await cliente.db(dbName).collection(quimicaCollection).insertOne(jsonQuestao);

            return response.json({
                statusCode: 200,
                lastID: res.insertedId
            });

        } catch(erro) {
            console.log(erro);
        }

        cliente.close();

        return response.json({
            statusCode: 400,
            error: "Erro de conexão com o servidor."
        });
    }

};