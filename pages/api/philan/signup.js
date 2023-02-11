import Philan from "../../../models/Philanthropist";
import dbConnect from "../../../lib/dbConnect"
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

export default async function handler(req,res){
	await dbConnect()

	Philan.findOne({email:req.body.email},(err,data)=>{
		if(!err && data){
            res.status(400).send({status:'error',msg:'user already exist'})
        }
	})

	bcrypt.hash(req.body.password,10)
	.then(hashedPass=>{
		Philan.create({
			email:req.body.email,
			name:req.body.name,
			image:req.body.image,
			password:hashedPass	
		},(err,data)=>{
			console.log(err,data)
			if(err && !data){
				res.status(500).send({status:'error',msg:'some error occured'})
			}
			else{
				let token = jwt.sign({id:data._id,name:data.name,type:"philan"},process.env.JWT_SECRET_KEY)
				console.log(token)
				res.status(200).send({status:'ok',msg:'new account created',user:token})
			}
		})
	})
	
}