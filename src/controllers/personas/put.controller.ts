import { RequestHandler } from "express";
import { Persona } from "~/controllers/personas/types";

type Params = {
    id: string
};

type RequestBody = Omit<Persona, 'id'>;

type Query = {};

const personas: Persona[] = [{
    id: "1",
    name: "Lucia",
    age: 20
}];

const controller: RequestHandler<Params, Persona, RequestBody, Query> = (request, response) => {
    const { body, params } = request;
    const { id } = params;

    const persona = personas.find((persona) => persona.id === id);

    if(persona){
        //Update persona
        response.json({
            ...persona,
            ...body,
        })
    }
    
    response.status(404).json();
};

export default controller;