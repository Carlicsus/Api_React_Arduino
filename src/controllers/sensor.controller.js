import SensorDAO from "../dao/sensor.dao.js";

const SensorController = {
    async helloWorld(req,res){
        res.status(201).json({msg:"Hello word"})
    },

    async getAllDataSensors(req,res){
        try {
            const sensorsData = await SensorDAO.getAll();  
            res.status(201).json(sensorsData);
        } catch (error) {
            res.status(500).json({error:error.message})
        }
    },

    async insertDataSensors(req,res){
        try {
            const sensorData = await SensorDAO.insert(req.body);
            res.status(201).json(sensorData)
        } catch (error) {
            res.status(500).json({error:error.message});
        }
    }
}

export default SensorController;