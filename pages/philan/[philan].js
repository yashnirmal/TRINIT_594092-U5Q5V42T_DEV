import Image from 'next/image'
import Donations from "../../components/donations/donations"
import Spending from "../../components/spending/spending"
import NgoList from "../../components/ngolist/ngolist";
import PhilanEdit from "../../components/edit/philanedit";
import {useRouter} from 'next/router'
import {useState,useEffect} from 'react';
import jwt_decode from 'jwt-decode'

export default function Ngo(){

	const router = useRouter()
	const [edit,setEdit] = useState(false)
	const [philanData,setPhilanData] = useState({})
	const [isLoggedUser,setIsLoggedUser] = useState(false)

	function getDetails(){
		const id = location.href.split('/').at(-1)
		fetch("/api/philan/"+id)
		.then(res=>res.json())
		.then(data=>{
			console.log(data)
			setPhilanData(data.data)
		})
	}

	function checkForUser(){
		const urlId = location.href.split('/').at(-1)
		const jwtId = jwt_decode(localStorage.getItem('usertoken')).id
		if(urlId==jwtId){
			setIsLoggedUser(true)
		}
		else{
			setIsLoggedUser(false)
		}
	}

	useEffect(()=>{
		getDetails()
		checkForUser()
	},[])

	useEffect(()=>{
		getDetails()
	},[edit])

	return (
		<div className="w-full flex justify-center">
		<div className="w-[90%] my-8 flex flex-col gap-10">
			{/*NGO profile*/}
			<div className="grid grid-cols-4 gap-20 py-14 px-20 bg-gray-100 rounded-2xl ">
				<div className="w-[300px] aspect-square relative rounded-full overflow-hidden">
					<Image src={philanData?.image}
						fill
						className="object-cover"
					 />
				</div>	

				<div className="col-span-3 flex flex-col gap-6 text-xl">
					<h1 className="text-3xl font-bold">{philanData?.name}</h1>
					<div>
						<span className="font-bold">Description : </span> 
						<span>
							 {philanData?.description}
						</span>	
					</div>	
					<div>
						<span className="font-bold">Type of NGOs I invest in : </span>
						<span>
							{philanData?.tags?.join(', ')}
						</span>
					</div>
					{
					isLoggedUser && <div>
						<button className="px-4 mr-6" onClick={()=>setEdit(!edit)} >Edit</button>
						<button onClick={()=>router.push("/ngo")}>Discover NGOs</button>
					</div>
					}
				</div>	
			</div>	

			{/*Donations*/}
			<div className="flex gap-10">
				<Donations />
				<NgoList />
			</div>
		</div>

		{edit && <PhilanEdit setEdit={setEdit} name={philanData?.name} description={philanData?.description} tags={philanData?.tags.join(",")} image={philanData?.image} />}

		</div>
	)
}