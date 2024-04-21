import ArduinoDAO from "../dao/arduino.dao.js";

const ArduinoController = {
    async helloWorld(req,res){
        res.status(201).json({msg:"Hello word con /arduino"})
    },

    async getAllDataArduino(req,res){
        try {
            const arduinosData = await ArduinoDAO.getAll();  
            res.status(201).json(arduinosData);
        } catch (error) {
            res.status(500).json({error:error.message})
        }
    },

    async insertDataArduinos(req,res){
        try {
            const arduinoData = await ArduinoDAO.insert(req.body);
            res.status(201).json(arduinoData)
        } catch (error) {
            res.status(500).json({error:error.message});
        }
    },

    async getLastDataArduino(req,res){
        try {
            const arduinoData = await ArduinoDAO.getLast();
            res.status(201).json(arduinoData)
        } catch (error) {
            res.status(500).json({error:error.message});
        }
    }
}

export default ArduinoController;