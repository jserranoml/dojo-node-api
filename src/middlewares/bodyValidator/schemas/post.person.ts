import Joi from 'joi';

const schema = Joi.object({
    name: Joi.string().required(),
    age: Joi.number().required(),
    address: Joi.string().optional()
});

export default schema;