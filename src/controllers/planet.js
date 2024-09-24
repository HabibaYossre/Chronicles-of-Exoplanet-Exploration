import { createCustomError } from "../middlewares/errors/customError.js";
import * as planetService from "../services/planet.js";

export const getAllPlanets = async (req, res, next) => {
    try {
        // check if the page and limit are provided
        if (!req.query.page || !req.query.limit) {
            throw createCustomError("Please provide page and limit!", 400, null);
        }

        // get page and limit from the query
        const page = parseInt(req.query.page);
        const limit = parseInt(req.query.limit);

        // calculate the number of documents to skip
        const planets = await planetService.getAllPlanets(page, limit);

        return res.status(200).json({
            message: "Success",
            body: planets,
            status: 200
        });

    } catch (error) {
        next(error);
    }
}

// controller to add planets to the database
export const addPlanet = async (req, res, next) => {
    try {

        // request body will be an array of planets
        const planets = req.body;

        // check if the planets are provided
        if (!planets) {
            throw createCustomError("Please provide planets!", 400, null);
        }

        // add planets to the database
        await planetService.addPlanets(planets);

        return res.status(200).json({
            message: "Planets added successfully!",
            body: null,
            status: 200
        });

    } catch (error) {
        next(error);
    }
}