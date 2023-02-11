import mongoose from 'mongoose';

const Philan = new mongoose.Schema({
	email:{type:String,required:true},
	name:{type:String,required:true},
	image:{type:String,required:true},
	password:{type:String,required:true},
	description:{type:String},
	tags:[String]
})

mongoose.models = {}

export default mongoose.model('Philan',Philan)