import Router from 'express';
const router = new Router();
import TagController from '../controllers/Tag.controller.js';

router.get("/tag", TagController.getTags);


export default router;