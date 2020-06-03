const express = require("express");

// Controllers
const geral = require("./controllers/GeralController");
const quimica = require("./controllers/QuimicaController");

// Validators
const novaQuestao = require("./validators/questao");
const getQuestao = require("./validators/queryQuestao");

const routes = express.Router();

// Boas vindas
routes.get("/", geral.bemvindo);
routes.get("/novidades", geral.novidades);

// Gerencia as rotas para questões de química
routes.get("/quimica/all", quimica.buscarTodas);
routes.get("/quimica/topicos", quimica.topicosCadastrados);
routes.get("/quimica/bateria", getQuestao, quimica.selecionarBateria);
routes.post("/quimica/nova", novaQuestao, quimica.inserirQuestao);

module.exports = routes;