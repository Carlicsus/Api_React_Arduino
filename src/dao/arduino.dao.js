import Arduino from '../models/arduino.model.js'

const ArduinoDAO ={
    async getAll(){
        return await Arduino.find()
    },
    async insert(sensorData){
        return await Arduino.create(sensorData);
    },
    async getLast() {
        return await Arduino.findOne().sort({ _id: -1 }).limit(1);
    }
}

export default ArduinoDAO;