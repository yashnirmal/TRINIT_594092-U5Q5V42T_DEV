import News from "../../../models/News";
import dbConnect from "../../../lib/dbConnect"

export default async function handler(req,res){
	await dbConnect()

    if(req.method=="POST"){
        News.create(req.body,(err,data)=>{
            if (!err && data) {
                res.status(200).send({status:'ok',msg:'news uploaded'})
            }
            else{
                res.status(400).send({status:'error',msg:'failed to upload news'})
            }
        })
    }
    else{
        News.find({},(err,data)=>{
            if (!err && data) {
                res.status(200).send({status:'ok',msg:'news fetched',data})
            }
            else{
                res.status(400).send({status:'error',msg:'failed to fecth news'})
            }
        })
    }
	
	
}