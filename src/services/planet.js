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
    const planets = await Planet.find({}, { _id: false, __v: false }).skip(offset).limit(limit);

    // get the total number of planets
    const totalPlanets = await Planet.countDocuments();

    return [planets, totalPlanets];
};

// service to add planets to the database
export const addPlanets = async (planetData) => {

    // add planets to the database
    await Planet.insertMany(planetData);
};

// service to get planet by name
export const getPlanetByName = async (name) => {

    // get the planet by name
    const planet = await Planet.findOne({ name }, { _id: false, __v: false });

    // check if the planet exists
    if (!planet) {
        throw createCustomError("Planet not found!", 404, null);
    }

    return planet;
};