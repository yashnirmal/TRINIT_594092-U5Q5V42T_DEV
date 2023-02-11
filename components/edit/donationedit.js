import {useState} from 'react'
import jwt_decode from 'jwt-decode'

export default function SpendEdit({setEdit}){

	const date  = new Date()	
	const dateToday = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`
	const [to,setTo] = useState(jwt_decode(localStorage.getItem('usertoken')).id)
	const [from,setFrom] = useState("")
	const [amount,setAmount] = useState("")

	function addDonation(){
		const reqOptions = {
	      method:"POST",
	      headers:{"Content-Type":"application/json",
	      "Accept":"application/json",
	      'x-access-token':jwt_decode(localStorage.getItem('usertoken')).id
	  		},
	      body:JSON.stringify({
	      	to,from,amount,date:dateToday
	      })
	    }

	    fetch('/api/donation',reqOptions)
	    .then(res=>res.json())
	    .then(data=>{
	    	if(data.status=='ok'){
	    		console.log('donation added')
	    		setEdit(false)
	    	}
	    })
	}



	return (
		<div className="w-[100vw] h-[100vh] bg-black/50 fixed top-0 left-0 z-100 flex justify-center items-center">
			<div className="max-h-[90%] w-[80%] rounded-2xl p-8 bg-white flex flex-col gap-6">
				<div>
				    <h3 className="mb-2 font-semibold">To : </h3>
					<input className="w-full" type="text" placeholder="To" value={to} onChange={e=>setTo(e.target.value)} />
				</div>
				<div>
				    <h3 className="mb-2 font-semibold">From : </h3>
					<input className="w-full" type="text" placeholder="From" value={from} onChange={e=>setFrom(e.target.value)} />
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
					<button onClick={addDonation}>Save</button>
				</div>
			</div>
		</div>
	)
}