import express from 'express';
const app = express();
import dotenv from "dotenv";
dotenv.config();
import userRoutes from "./database/routes/User.routes.js";
const port = process.env.PORT || 3001;

app.use(express.json());
app.use("/api", userRoutes)


app.listen(port, () =>{
    console.log("server at post " + port);
})