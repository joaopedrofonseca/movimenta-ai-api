import { getActivities } from "../controllers/activities.controllers.js";
import { Router } from "express";

const activitiesRouter = Router();

activitiesRouter.get('/', getActivities);

export {activitiesRouter};