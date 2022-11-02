import express from 'express';
const app = express();
import dotenv from "dotenv";
dotenv.config();
import userRoutes from "./database/routes/User.routes.js";
import routeRoutes from "./database/routes/Route.routes.js";
import tagRoutes from "./database/routes/Tag.routes.js";
const port = process.env.PORT || 3001;

app.use(express.json());

app.use("/api", routeRoutes);
app.use("/api", userRoutes);
app.use("/api", tagRoutes);

app.use('/images', express.static('./storage'));

app.get("/", (req,res) => {
    
});

app.listen(port, () =>{
    console.log("server at post " + port);
})