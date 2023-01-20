import { RequestHandler } from 'express';
import { Schema, ValidationErrorItem } from 'joi';
import { Persona } from '~/controllers/personas/types';

type Response = {
    errors: ValidationErrorItem[]
}

const bodyValidator = (schema: Schema): RequestHandler<{}, Response | Persona, {}, {}> => async (req, res, next) => {
    const { body } = req;
    
    const { error } = await schema.validate(body);

    if(error) {
        const { details } = error;

        return res.status(402).json({
            errors: details
        })
    }

    return next();
}

export default bodyValidator;