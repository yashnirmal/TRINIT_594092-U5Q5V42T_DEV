import mongoose from 'mongoose';

const NewsSchema = new mongoose.Schema({
	heading:{type:String,required:true},
	description:{type:String,required:true},
	author:{type:String,required:true},
	authorName:{type:String,required:true},
	date:{type:String,required:true}
})
mongoose.models = {}

export default mongoose.model('News',NewsSchema)