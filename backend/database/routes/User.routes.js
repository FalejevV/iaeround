import Router from 'express';
const router = new Router();
import userController from '../controllers/User.controller.js';


router.post("/user", userController.createUser);
router.post("/user", userController.getAllUsers);
router.post("/user/:id", userController.getOneUser);
router.post("/user", userController.updateUser);
router.post("/user/:id", userController.deleteUser);


export default router;