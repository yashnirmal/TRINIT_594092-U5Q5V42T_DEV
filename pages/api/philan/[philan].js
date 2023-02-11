import dbConnect from "../../../lib/dbConnect"
import Philan from "../../../models/Philanthropist";


export default async function handler(req,res){
	await dbConnect()
	console.log(req.query)
	Philan.findOne({_id:req.query.philan},(err,data)=>{
		if(!err && data){
            res.status(200).send({status:'ok',msg:'user data fetched',data:data})
        }else{
        	res.status(400).send({status:'error',msg:'user does not exist'})
        }
	})
} 