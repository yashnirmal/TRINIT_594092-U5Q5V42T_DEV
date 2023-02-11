import NgoCard from "../components/ngolist/ngocard"
import {useEffect,useState} from "react"

export default function Explore(){

	const [ngoarr,setNgoarr] = useState([])
	const [searchText,setSearchText] = useState("")
	function getSearchResults(){
		const a = []
		ngoarr.forEach((n)=>{
			console.log(n.tags)
			if(n.mission.includes(searchText) || n.history.includes(searchText) 
			|| n.plan.includes(searchText) || n.location.includes(searchText) 
			|| (searchText in n.tags)){ a.push(n)};
		})
		console.log(a)
		return a	

	}

	useEffect(()=>{
		fetch('/api/ngo')
		.then(res=>res.json())
		.then(data=>{
			console.log(data)
			if(data.status=='ok'){
				setNgoarr(data.data)
			}
		})
		getSearchResults()
	},[])

	return (
		<div className="w-full pt-10 flex justify-center">
			<div className="w-[90%] max-w-[800px] flex flex-col">
				<input className="w-full" type="text" placeholder="Search NGOs" value={searchText} onChange={(e)=>{setSearchText(e.target.value);getSearchResults()}} />
				<div className="flex flex-col gap-6 py-6">
					{
						getSearchResults().map((n)=>(
							<NgoCard n={n}/>
						))
					}
				</div>
			</div>
		</div>
	)
}