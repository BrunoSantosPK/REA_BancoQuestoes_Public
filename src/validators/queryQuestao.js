const { celebrate, Joi, Segments } = require("celebrate");


module.exports = celebrate({
    [Segments.QUERY]: Joi.object().keys({
        topico: Joi.string().required(),
        total: Joi.number().required()
    })
});