import express from "express";
import ArduinoController from "../controllers/arduino.controller.js";

const router = express.Router();

router.get('/helloWorld',ArduinoController.helloWorld);
router.get('/',ArduinoController.getAllDataArduino);
router.post('/',ArduinoController.insertDataArduinos);
router.get('/last',ArduinoController.getLastDataArduino);


export default router;