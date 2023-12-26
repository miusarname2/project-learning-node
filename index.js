import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";
import cors from "cors";
import { crearToken } from "./Controller/helpers/jwt.helpers.js";

const app = express();

// Settings

dotenv.config();
app.set("port",process.env.PORT || 3000);

// Middlewares

app.use(morgan("dev"));
app.use(express.json());
app.use(cors({origin:"*"}));

// Routes

app.get("/",(req,res)=>{
    res.send("Bienvenido");
});

app.get("/token",crearToken);


// Server listen

app.listen(app.get("port"),()=>{
    console.log("Server on port " + app.get("port"));
});