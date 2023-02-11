import dbConnect from "../../../lib/dbConnect"
import Ngo from "../../../models/Ngo";
import mongoose from 'mongoose'

export default async function handler(req,res){
	await dbConnect()
	console.log(req.query)
	Ngo.index({"mission":"text","plan":"text","location":"text"})
	Ngo.find({$text:{$search:req.body.s}},{_id:0,__v:0},(err,data)=>{
		console.log(data,err)
	})
} 