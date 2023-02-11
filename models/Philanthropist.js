import mongoose from 'mongoose';

const Philan = new mongoose.Schema({
	email:{type:String,required:true,unique:true},
	name:{type:String,required:true},
	image:{type:String,required:true},
	password:{type:String,required:true},
	description:{type:String,default:"None"},
	tags:[String]
})

mongoose.models = {}

export default mongoose.model('Philan',Philan)