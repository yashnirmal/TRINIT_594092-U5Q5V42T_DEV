import dbConnect from "../../../lib/dbConnect"
import Ngo from "../../../models/Ngo";


export default async function handler(req,res){
	await dbConnect()
	const id = req.headers['x-access-token']
	console.log('updating NGO : ',id)

	console.log(req.query)
	Ngo.updateOne({_id:id},{$set:{
		name:req.body.name,
		mission:req.body.mission,
		history:req.body.history,
		plan:req.body.plan,
		tags:req.body.tags,
		image:req.body.image
		}},
		(err,data)=>{
			if(!err && data){
				console.log(data)
	            res.status(200).send({status:'error',msg:'user updates',data:data})
	        }else{
	        	res.status(400).send({status:'error',msg:'user did not update'})
	        }
	})
} 