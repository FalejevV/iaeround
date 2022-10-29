import db from "../../database.js";

import { nanoid } from "nanoid";
import { bodyInjectionCheck } from "../VarChecker.js";

class RouteController {
    async createRoute(req, res) {
        const body = req.body;
        const injectionCheckResult = bodyInjectionCheck(body)
        if(injectionCheckResult === "OK"){
            const result = await db.query(`INSERT INTO routes (title,id,distance,time,about,likes,tags,owner_id,gpx,images) values ('${body.title}', '${nanoid()}', ${body.distance}, ${body.time}, '${body.about}', '{}', '{${body.tags}}', '${body.owner_id}', 'route.gpx', '{${body.images}}');`);
            if(result){
                res.status(200);
                res.send("OK");
            }
        }else{
            console.log(injectionCheckResult);
            res.status(401);
            res.send(injectionCheckResult + " <-- wrong input");
        }

    }
    async getAllRoutes(req, res) {
        const routeQuery = await db.query(`SELECT * FROM routes;`);
        res.send(routeQuery.rows);
    }
    async getOneRoute(req, res) {
        const routeQuery = await db.query(`SELECT * FROM routes where ID = '${req.params.id}';`);
        res.send(routeQuery.rows[0]);
    }
    async updateRoute(req, res) {

    }
    async deleteRoute(req, res) {
        const routeQuery = await db.query(`DELETE FROM routes where ID = '${req.params.id}';`);
        res.send(routeQuery.rowCount > 0 ? "Removed" : "Not found");
    }
}
export default new RouteController();