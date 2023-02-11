import Ngo from "../../../models/Ngo";
import dbConnect from "../../../lib/dbConnect"
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

export default async function handler(req,res){
	await dbConnect()

	Ngo.findOne({email:req.body.email},(err,data)=>{
		if(!err && data){
            res.status(400).send({status:'error',msg:'user already exist'})
        }
	})

	bcrypt.hash(req.body.password,10)
	.then(hashedPass=>{
		Ngo.create({
			email:req.body.email,
			name:req.body.name,
			image:req.body.image,
			password:hashedPass	
		},(err,data)=>{
			if(err & !data){
				res.status(500).send({status:'error',msg:'some error occured'})
			}
			else{
				let token = jwt.sign({id:data._id,name:data.name,type:"ngo"},process.env.JWT_SECRET_KEY)
				res.status(200).send({status:'ok',msg:'new account created',user:token})
			}
		})
	})
	
}