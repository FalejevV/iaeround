import Router from 'express';
const router = new Router();
import RouteController from '../controllers/Route.controller.js';


router.post("/route", RouteController.createRoute);
router.get("/route", RouteController.getAllRoutes);
router.get("/route/:id", RouteController.getOneRoute);
router.put("/route", RouteController.updateRoute);
router.delete("/route/:id", RouteController.deleteRoute);


export default router;