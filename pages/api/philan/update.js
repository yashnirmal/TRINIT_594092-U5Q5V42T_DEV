import dbConnect from "../../../lib/dbConnect"
import Philan from "../../../models/Philanthropist";


export default async function handler(req,res){
	await dbConnect()

	const id = req.headers['x-access-token']
	console.log(id)
	console.log(req.query)
	Philan.updateOne({_id:id},{$set:{name:req.body.name,description:req.body.description,tags:req.body.tags,image:req.body.image}},(err,data)=>{
		if(!err && data){
			console.log(data)
            res.status(200).send({status:'error',msg:'user updates',data:data})
        }else{
        	res.status(400).send({status:'error',msg:'user did not update'})
        }
	})
} 