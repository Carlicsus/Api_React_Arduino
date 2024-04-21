import express from "express";
import morgan from "morgan";
import { config } from "dotenv";
import sensorRouter from "./routes/sensor.routes.js"
import arduinoRouter from "./routes/arduino.routes.js"

config();

const app = express();

app.use(express.json());

app.use(express.urlencoded({extended:false}));

app.use(morgan("dev"));

app.use("/api/sensors",sensorRouter)
app.use("/api/arduino",arduinoRouter)

export default app;