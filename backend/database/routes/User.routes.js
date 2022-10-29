import Router from 'express';
const router = new Router();
import userController from '../controllers/User.controller.js';


router.post("/user", userController.createUser);
router.get("/user", userController.getAllUsers);
router.get("/user/:id", userController.getOneUser);
router.put("/user", userController.updateUser);
router.delete("/user/:id", userController.deleteUser);


export default router;