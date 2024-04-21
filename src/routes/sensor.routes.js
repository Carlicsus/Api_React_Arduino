import express from "express";
import SensorController from "../controllers/sensor.controller.js";

const router = express.Router();

router.get('/helloWorld',SensorController.helloWorld);
router.get('/',SensorController.getAllDataSensors);
router.post('/',SensorController.insertDataSensors);


export default router;