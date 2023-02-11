import mongoose from 'mongoose';

const NgoSchema = new mongoose.Schema({
	email:{type:String,required:true},
	name:{type:String,required:true},
	image:{type:String,required:true},
	password:{type:String,required:true},
	mission:{type:String},
	history:{type:String},
	plan:{type:String},
	tags:[String],
	spendings:[{
		heading:String,
		description:String,
		amount:String,
		date:String
	}]
})
mongoose.models = {}

export default mongoose.model('Ngo',NgoSchema)