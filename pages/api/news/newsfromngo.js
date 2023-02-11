import News from "../../../models/News";
import dbConnect from "../../../lib/dbConnect"

export default async function handler(req,res){
	await dbConnect()

    console.log("hittin news point")

    News.find({author:req.body.id},(err,data)=>{
        if (!err && data) {
            res.status(200).send({status:'ok',msg:'news fetched',data})
        }
        else{
            res.status(400).send({status:'error',msg:'failed to fecth news'})
        }
    })

	
}