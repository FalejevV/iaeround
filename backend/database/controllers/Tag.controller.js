import db from "../../database.js";

import { nanoid } from "nanoid";
import { bodyInjectionCheck } from "../VarChecker.js";

class TagController {
    async getTags(req, res){
        const tagsQuery = await db.query(`SELECT * FROM tags;`);
        res.send(tagsQuery.rows);
    }
}
export default new TagController();