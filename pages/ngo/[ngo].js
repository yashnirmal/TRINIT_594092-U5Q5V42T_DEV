import Image from 'next/image'
import Donations from "../../components/donations/donations"
import Spending from "../../components/spending/spending"
import NewsCard from "../../components/newscard/newscard"
import NgoEdit from "../../components/edit/ngoedit"
import {useState,useEffect} from 'react'
import {useRouter} from 'next/router'
import jwt_decode from 'jwt-decode'

export default function Ngo(){

	const router = useRouter()
	const [edit,setEdit] = useState(false)
	const [ngoData,setNgoData] = useState({})
	const [isLoggedUser,setIsLoggedUser] = useState(false)
	const [newsArticles,setNewsArticles] = useState([])


	function getDetails(){
		const id = location.href.split('/').at(-1)
		fetch("/api/ngo/"+id)
		.then(res=>res.json())
		.then(data=>{
			setNgoData(data.data)
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

	function fecthNewsFromNgo(){
		console.log("hitting news point")
		const id = location.href.split('/').at(-1)

	    const reqOptions = {
	      method:"POST",
	      headers:{"Content-Type":"application/json",
	      "Accept":"application/json"},
	      body:JSON.stringify({id})
		}

		
		fetch('/api/news/newsfromngo',reqOptions)
		.then(res=>res.json())
		.then(data=>{
			if(data.status=='ok')
				setNewsArticles(data.data)
		})
	}

	useEffect(()=>{
		getDetails()
		checkForUser()
		fecthNewsFromNgo()
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
					<Image src={ngoData?.image}
						fill
						className="object-cover"
					 />
				</div>	

				<div className="col-span-3 flex flex-col gap-6 text-xl">
					<h1 className="text-3xl font-bold">{ngoData?.name}</h1>
					<div>
						<span className="font-bold">Mission :</span> 
						<span>
							{ngoData?.mission}
						</span>	
					</div>	
					<div>
						<span className="font-bold">History :</span> 
						<span>
							{ngoData?.history}
						</span>	
					</div>	
					<div>
						<span className="font-bold">Plan :</span> 
						<span>
						{ngoData?.plan}
						</span>	
					</div>
					<div>
						<span className="font-bold">Type of work we do :</span> 
						<span>
							{ngoData?.tags?.join(', ')}
						</span>	
					</div>
					{isLoggedUser && <div>
						<button className="px-4 mr-6" onClick={()=>setEdit(!edit)}>Edit</button>
						<button onClick={()=>router.push("/createnews")}>Share News</button>
					</div>
					}
				</div>	
			</div>	

			{/*Donations*/}
			<div className="flex gap-10">
				<Donations isLoggedUser={isLoggedUser} />
				<Spending isLoggedUser={isLoggedUser} spendings={(ngoData.spendings)?ngoData.spendings:[]} />
			</div>

			{/*News*/}
			<div className="border-t-4 pt-4 ">
				<h1 className="text-3xl font-bold mb-10">News From Us</h1>
				<div className="grid grid-cols-2 gap-8">
				{
					newsArticles.map((n)=>(
						<NewsCard n={n} />
					))
				}
				</div>
			</div>
			
		</div>
			{ edit && <NgoEdit setEdit={setEdit} name={ngoData?.name} mission={ngoData?.mission} history={ngoData?.history} plan={ngoData?.plan} tags={ngoData?.tags.join(",")} image={ngoData?.image}  />}
		</div>
	)
}