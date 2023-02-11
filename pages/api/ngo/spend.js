import dbConnect from "../../../lib/dbConnect";
import Ngo from "../../../models/Ngo";


export default async function handler(req,res){
	await dbConnect()
	const id = req.headers['x-access-token']
	console.log('updating NGO : ',id)
	console.log(req.body)

	Ngo.updateOne({_id:id},{$push:{
			spendings:req.body
		}},
		(err,data)=>{
			if(!err && data){
				console.log(data)
	            res.status(200).send({status:'ok',msg:'spending updated',data:data})
	        }else{
	        	res.status(400).send({status:'error',msg:'user did not update'})
	        }
	})
} 