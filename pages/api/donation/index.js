import Donation from "../../../models/Donation";
import dbConnect from "../../../lib/dbConnect"

export default async function handler(req,res){
	await dbConnect()


    Donation.create(req.body,(err,data)=>{
        if (!err && data) {
            res.status(200).send({status:'ok',msg:'Donation created'})
        }
        else{
            res.status(400).send({status:'error',msg:'failed to create donation'})
        }
    })

    
}