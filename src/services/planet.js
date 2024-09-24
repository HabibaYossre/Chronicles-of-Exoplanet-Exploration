import { createCustomError } from "../middlewares/errors/customError.js";
import Planet from "../DB/models/planet.js";

// service to get all planets with pagination
export const getAllPlanets = async (page, limit) => {

    // check if the page and limit are provided
    if (!page || !limit) {
        throw createCustomError("Please provide page and limit!", 400, null);
    }

    // calculate the number of documents to skip
    const offset = (page - 1) * limit;

    // get the planets from the database
    const planets = await Planet.find().skip(offset).limit(limit);

    return planets;
};

// service to add planets to the database
export const addPlanets = async (planetData) => {

    // add planets to the database
    await Planet.insertMany(planetData);
};