import mongoose from 'mongoose';

const NgoSchema = new mongoose.Schema({
	email:{type:String,required:true,unique:"true"},
	name:{type:String,required:true},
	image:{type:String,required:true},
	password:{type:String,required:true},
	mission:{type:String,default:"None"},
	history:{type:String,default:"None"},
	plan:{type:String,default:"None"},
	location:{type:String,default:"None"},
	upi:{type:String},
	tags:[String],
	spendings:[{
		heading:{type:String,required:true},
		description:{type:String,required:true},
		amount:{type:String,required:true},
		date:{type:String,required:true}
	}]
})
mongoose.models = {}

export default mongoose.model('Ngo',NgoSchema)