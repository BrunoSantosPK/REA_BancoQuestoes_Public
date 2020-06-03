module.exports = {

    bemvindo(request, response) {
        return response.json({
            statusCode: 200,
            mensagem: "Bem vindo ao banco de questões da biblioteca livre PK Chemistry. A maioria das questões aqui são voltadas para o ensino básico. Para mais detalhes do uso, consulte a documentação no GitHub."
        });
    },

    novidades(request, response) {
        return response.json({
            statusCode: 200,
            mensagem: "Bem-vindo(a) ao banco de questões da PK Chemistry. A última atualização no nosso banco ocorreu em 08/04/2020 às 15:29. Contamos com um total de 40 questões."
        });
    }

};