import DonationCard from "./donationcard"
import {useState,useEffect} from 'react';
import DonationEdit from "../edit/donationedit"
import jwt_decode from 'jwt-decode'

export default function Donations({isLoggedUser}) {

	const [edit,setEdit] = useState(false)
	const [donations,setDonations] = useState([])

	function getDonations(){
		const decoded = jwt_decode(localStorage.getItem('usertoken'))
		let reqbody = {} 
		if(decoded.type=='ngo'){
			reqbody={to:decoded.id}
		}
		else{
			reqbody={from:decoded.id}
		}

		const reqOptions = {
	      method:"POST",
	      headers:{"Content-Type":"application/json",
	      "Accept":"application/json",
	  	},
	      body:JSON.stringify(reqbody)
	    }

	    fetch('/api/donation/getdonations',reqOptions)
	    .then(res=>res.json())
	    .then(data=>{
	    	if(data.status=='ok'){
	    		console.log('donation fetched')
	    		setDonations(data.data)
	    	}
	    })
	}

	useEffect(()=>{
		getDonations()
	},[])

	return (
		<div className="flex-1 w-full h-fit bg-gray-100 rounded-2xl">
			<div className="p-4  border-b-2">
				<h2 className="font-semibold text-2xl">Donations</h2>
			</div>
			<div className="p-4">
				{
					donations.map((d)=>(
						<DonationCard d={d}/>
					))
				}
			</div>

			{
				isLoggedUser && <button className="w-full" onClick={()=>setEdit(true)}>Add Donation</button>
			}

			{edit && <DonationEdit setEdit={setEdit} />}
		</div>
	)
}