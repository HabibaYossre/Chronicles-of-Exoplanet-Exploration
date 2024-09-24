import { Router } from "express";
import * as planetController from "../controllers/planet.js";

const router = Router();

// route to get all planets with pagination
router.get("/", planetController.getAllPlanets);

// route to add new planet
router.post("/", planetController.addPlanet);

// route to get planet by name
router.get("/:name", planetController.getPlanetByName);

export default router;