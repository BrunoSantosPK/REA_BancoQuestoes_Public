const { celebrate, Joi, Segments } = require("celebrate");


module.exports = celebrate({
    [Segments.BODY]: Joi.object().keys({
        descricao: Joi.string().required(),
        opcao_1: Joi.string().required(),
        opcao_2: Joi.string().required(),
        opcao_3: Joi.string().required(),
        opcao_4: Joi.string().required(),
        resposta: Joi.string().required(),
        comentario: Joi.string().required(),
        dificuldade: Joi.number().required(),
        topico: Joi.string().required()
    })
});