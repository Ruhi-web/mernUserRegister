import mongoose from "mongoose";
import autoinc from 'mongoose-auto-increment'

const userSchema = new mongoose.Schema({
    id:Number,
    name:String,
    email: String,
    phone: Number
});
// autoinc.initialize(mongoose.connection)
// userSchema.plugin(autoinc.plugin, 'user')
const user = mongoose.model('user', userSchema);
export default user;

