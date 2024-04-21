import mongoose from "mongoose"

const sensorSchema = new mongoose.Schema({
    id_sensor:{
        type:String,
        required:true
    },
    name_sensor:{
        type:String,
        required:true
    },
    reading: [{
    }],
    createdAt:{
        type:Date,
        default:Date.now
    },
    updatedAt:{
        type:Date,
        default:Date.now
    }
},{
    versionKey:false
})

const SensorModel = mongoose.model("Sensor",sensorSchema);

export default SensorModel