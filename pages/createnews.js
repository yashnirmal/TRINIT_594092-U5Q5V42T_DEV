import jwt_decode from 'jwt-decode'
import {useState} from 'react';
import {useRouter} from 'next/router'


export default function CreateNews(){

	const router = useRouter()
	const date  = new Date()
	const dateToday = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`
	const [heading,setHeading] = useState("");
	const [description,setDescription] = useState("")

	function publishNews(){
		const author = jwt_decode(localStorage.getItem('usertoken')).id
		const authorName = jwt_decode(localStorage.getItem('usertoken')).name

	    const reqOptions = {
	      method:"POST",
	      headers:{"Content-Type":"application/json",
	      "Accept":"application/json"},
	      body:JSON.stringify({
	      	heading,description,author,authorName,date:dateToday
	      })
	    }
		fetch('/api/news',reqOptions)
		.then(res=>res.json())
		.then(data=>{
			if(data.status=='ok'){
				router.push('/news')
			}
		})

	}

	return (
		<div className="w-full flex justify-center mt-10">
			<div className="w-[50%] flex flex-col gap-10">
				<div className="text-3xl flex justify-between items-center">
					<h1 className="font-bold">Lets share the news with everyone</h1>
					<span className="text-xl">{dateToday}</span>
				</div>
				<div>
					<h2 className="text-2xl font-semibold mb-2">Heading</h2>
					<input className="w-full" type="text" placeholder="Heading" value={heading} onChange={e=>setHeading(e.target.value)} />
				</div>	
				<div>
					<h2 className="text-2xl font-semibold mb-2">Description</h2>
					<textarea className="w-full" type="text" placeholder="Description" value={description} onChange={e=>setDescription(e.target.value)} />
				</div>	

				<div>
					<button onClick={publishNews}>Publish</button>
				</div>
			</div>
		</div>
	)
}