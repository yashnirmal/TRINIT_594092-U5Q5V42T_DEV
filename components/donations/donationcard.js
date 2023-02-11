import Image from "next/image"
import Link from 'next/link'
import {useEffect,useState} from 'react'
import jwt_decode from 'jwt-decode'

export default function DonationCard({d}){

	const [donationData,setDonationData] = useState({})

	useEffect(()=>{
		let endpoint=""
		if(location.href.split('/').at(-2)=='ngo'){
			endpoint="/api/philan/"+d?.from
		}
		else{
			endpoint="/api/ngo/"+d?.to
		}
		console.log(endpoint)
		fetch(endpoint)
		.then(res=>res.json())
		.then(data=>{
			if(data.status=='ok'){
				console.log(data)
				setDonationData(data.data)
			}
		})
	},[d])

	return (
		<div className="py-2 grid grid-cols-4 border-b-2 gap-4">
			<div className="col-span-1 aspect-square relative rounded-full overflow-hidden z-2">
				<Image src={donationData?.image}
						fill
						className="object-cover"
				/>
			</div>
			<div className="col-span-3 text-xl flex flex-col gap-4 ml-4">
				<Link className="hover:underline font-bold" href={`/${location.href.split('/').at(-2)=="ngo"?"philan":"ngo"}/${donationData?._id}`}>{donationData?.name}</Link>
				<span><span className="font-semibold">Amount :</span> Rs {d.amount}</span>
				<span>{d?.date}</span>
			</div>
		</div>
	)
}