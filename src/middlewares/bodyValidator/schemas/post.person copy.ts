import Joi from 'joi';

const schema = Joi.object({
    name: Joi.string().optional(),
    age: Joi.number().optional(),
    address: Joi.string().optional()
});

export default schema;