import dbConnect from "../../../lib/dbConnect"
import Ngo from "../../../models/Ngo";


export default async function handler(req,res){
	await dbConnect()
	console.log(req.query)
	Ngo.findOne({_id:req.query.ngo},(err,data)=>{
		if(!err && data){
            res.status(200).send({status:'ok',msg:'ngo fetched',data:data})
        }else{
        	res.status(400).send({status:'error',msg:'user does not exist'})
        }
	})
} 