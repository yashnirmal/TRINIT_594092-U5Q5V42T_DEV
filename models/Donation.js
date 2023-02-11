import mongoose from 'mongoose';

const DonationSchema = new mongoose.Schema({
	from:{type:String,required:true},
	to:{type:String,required:true},
	amount:{type:String,required:true},
	date:{type:String,required:true}
})
mongoose.models = {}

export default mongoose.model('Donation',DonationSchema)