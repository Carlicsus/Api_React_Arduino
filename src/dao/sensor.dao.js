import Sensor from '../models/sensor.model.js'

const SensorDAO ={
    async getAll(){
        return await Sensor.find()
    },
    async insert(sensorData){
        return await Sensor.create(sensorData);
    },
}

export default SensorDAO;