import { RequestHandler } from "express";
import { Persona } from "~/controllers/personas/types";
import { v4 as uuidv4 } from 'uuid';

type Params = {};

type RequestBody = Omit<Persona, 'id'>;

type Query = {};

const controller: RequestHandler<Params, Persona, RequestBody, Query> = (request, response) => {
    const { body } = request;

    const persona = {
        ...body,
        id: uuidv4()
    };
    
    response.json(persona);
};

export default controller;