import { RequestHandler } from "express";
import { Persona } from "~/controllers/personas/types";

type Params = {
    id: string
};

type Query = {};

const personas: Persona[] = [{
    id: "1",
    name: "Lucia",
    age: 20
}];

type ResponseBody = {
    message: string
}

const controller: RequestHandler<Params, ResponseBody, {}, Query> = (request, response) => {
    const { params } = request;
    const { id } = params;

    const persona = personas.find((persona) => persona.id === id);

    if(persona){
        //Delete persona
        response.json({
            message: "Deleted with success"
        })
    }
    
    response.status(404).json();
};

export default controller;