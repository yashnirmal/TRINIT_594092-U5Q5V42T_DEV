import dbConnect from "../../../lib/dbConnect"
import Ngo from "../../../models/Ngo";


export default async function handler(req,res){
	await dbConnect()
	console.log(req.query)
	Ngo.find({},(err,data)=>{
		if(!err && data){
            res.status(200).send({status:'ok',msg:'ngo list returing',data:data})
        }else{
        	res.status(400).send({status:'error',msg:'some error occureds'})
        }
	})
} 