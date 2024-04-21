import mongoose from "mongoose"

const arduinoSchema = new mongoose.Schema({
    ip_arduino:{
        type:String,
        required:true
    },
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

const ArduinoModel = mongoose.model("Arduino",arduinoSchema);

export default ArduinoModel