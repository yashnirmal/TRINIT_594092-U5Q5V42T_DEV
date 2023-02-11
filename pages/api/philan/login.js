import Philan from "../../../models/Philanthropist";
import dbConnect from "../../../lib/dbConnect"
import bcrypt from 'bcryptjs'
import jwt from "jsonwebtoken"

export default async function handler(req,res){
	await dbConnect()

	Philan.findOne({email:req.body.email},(err,data)=>{
		if(err && !data){
            res.status(400).send({status:'error',msg:'user already exist'})
        }

        bcrypt.compare(req.body.password,data.password)
        .then((isValidPass)=>{
                if (isValidPass) {
                    let token = jwt.sign({id:data._id,name:data.name,type:"philan"},process.env.JWT_SECRET_KEY);
                    res.status(200).send({status:'ok',msg:'player found',user:token})
                }
                else{
                    res.status(400).send({status:'error',msg:'you have entered a wrong password'})
                }
            })
            .catch(()=>{
                console.log("There is something wrong with the server, please try again after sometime")
        })
	})
	
}