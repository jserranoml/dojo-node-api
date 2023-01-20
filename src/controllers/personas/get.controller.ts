import { RequestHandler } from "express";
import { Persona } from "~/controllers/personas/types";

type Params = {
  id: string;
};

type RequestBody = {};
type Query = {};

const personas: Persona[] = [{
    id: "1",
    name: "Jorge",
    age: 21
}];

const controller: RequestHandler<Params, Persona, RequestBody, Query> = (request, response) => {
    const { params } = request;
    const { id } = params;
    
    const persona = personas.find((persona) => persona.id.toString() === id);

    if(persona) {
        return response.json(persona);
    }

    return response.status(404).json();
};

export default controller;
