import { Router } from "express";
import * as planetController from "../controllers/planet.js";

const router = Router();

// route to get all planets with pagination
router.get("/", planetController.getAllPlanets);

export default router;