import {useState} from 'react'
import jwt_decode from 'jwt-decode'

export default function SpendEdit({setEdit}){

	const date  = new Date()	
	const dateToday = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`
	const [heading,setHeading] = useState("")
	const [description,setDescription] = useState("")
	const [amount,setAmount] = useState("")

	function addSpend(){
		const reqOptions = {
	      method:"POST",
	      headers:{"Content-Type":"application/json",
	      "Accept":"application/json",
	      'x-access-token':jwt_decode(localStorage.getItem('usertoken')).id
	  		},
	      body:JSON.stringify({
	      	heading,description,amount,date:dateToday
	      })
	    }

	    fetch('/api/ngo/spend',reqOptions)
	    .then(res=>res.json())
	    .then(data=>{
	    	if(data.status=='ok'){
	    		console.log('spend added')
	    		setEdit(false)
	    	}
	    })
	}



	return (
		<div className="w-[100vw] h-[100vh] bg-black/50 fixed top-0 left-0 z-100 flex justify-center items-center">
			<div className="max-h-[90%] w-[80%] rounded-2xl p-8 bg-white flex flex-col gap-6">
				<div>
				    <h3 className="mb-2 font-semibold">Heading : </h3>
					<input className="w-full" type="text" placeholder="Heading" value={heading} onChange={e=>setHeading(e.target.value)} />
				</div>
				<div>
				    <h3 className="mb-2 font-semibold">Description : </h3>
					<input className="w-full" type="text" placeholder="Description" value={description} onChange={e=>setDescription(e.target.value)} />
				</div>
				<div>
				    <h3 className="mb-2 font-semibold">Amount : </h3>
					<input className="w-full" type="text" placeholder="Amout" value={amount} onChange={e=>setAmount(e.target.value)} />
				</div>
				
				{/*
				<div>
				    <h3 className="mb-2 font-semibold">Date : </h3>
					<input type="date"/>
				</div>
				*/}
				
				<div>
					<button className="mr-8 bg-red-500 hover:bg-red-600" onClick={()=>setEdit(false)}>Cancel</button>
					<button onClick={addSpend}>Save</button>
				</div>
			</div>
		</div>
	)
}