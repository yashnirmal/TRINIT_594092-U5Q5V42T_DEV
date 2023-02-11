import {useState} from 'react';
import jwt_decode from 'jwt-decode'

export default function NgoEdit(props){

	const [name,setName]= useState(props.name);
	const [mission,setMission] = useState(props.mission);
	const [history,setHistory] = useState(props.history);
	const [plan,setPlan] = useState(props.plan);
	const [tags,setTags] = useState(props.tags);
	const [image,setImage] = useState(props.image);
	const [Location,setLocation] = useState(props.Location);
	const [upi,setUpi] = useState(props.upi);



	function convertTobase64(file){
    	return new Promise((resolve,reject)=>{
			const fileReader = new FileReader();
			fileReader.readAsDataURL(file)
			fileReader.onload=()=>{
			resolve(fileReader.result)
			}
			fileReader.onerror=(err)=>{
			reject(err)
			}
    	})
  	}

	async function handleImageChange(e){
		const file = e.target.files[0]
		const base64 = await convertTobase64(file)
		setImage(base64)
	}


	async function handleUPIImageChange(e){
		const file = e.target.files[0]
		const base64 = await convertTobase64(file)
		setUpi(base64)
	}

	function updateDetails(){
		const reqOptions = {
	      method: "POST",
	      headers: {
	        "Content-Type": "application/json",
	        "Accept": "application/json",
	        "x-access-token": location.href.split('/').at(-1)
	      },
	      body: JSON.stringify({
		       name,mission,history,plan,tags:tags.split(','),image,location:Location,upi
	      }),
	    };
	    console.log("updating ngo");
		fetch("/api/ngo/update",reqOptions)
		.then(res=>res.json())
		.then(data=>{
			console.log(data)
			props.setEdit(false)
		})
	}


	return (
		<div className="w-[100vw] h-[100vh] bg-black/50 fixed top-0 left-0 z-100 flex justify-center items-center">
			<div className="max-h-[90%] w-[80%] overflow-y-scroll rounded-2xl p-8 bg-white flex flex-col gap-6">
				<div>
				    <h3 className="mb-2 font-semibold">Name : </h3>
					<input className="w-full" type="text" placeholder="Name" value={name} onChange={(e)=>setName(e.target.value)} />
				</div>
				<div>
				    <h3 className="mb-2 font-semibold">Mission : </h3>
					<input className="w-full" type="text" placeholder="Mission" value={mission} onChange={(e)=>setMission(e.target.value)}  />
				</div>
				<div>
				    <h3 className="mb-2 font-semibold">History : </h3>
					<input className="w-full" type="text" placeholder="History" value={history} onChange={(e)=>setHistory(e.target.value)}  />
				</div>
				<div>
				    <h3 className="mb-2 font-semibold">Plan : </h3>
					<input className="w-full" type="text" placeholder="Plan" value={plan} onChange={(e)=>setPlan(e.target.value)}  />
				</div>
				<div>
				    <h3 className="mb-2 font-semibold">Location : </h3>
					<input className="w-full" type="text" placeholder="Location" value={Location} onChange={(e)=>setLocation(e.target.value)}  />
					<p>*Enter city or a country e.g. Delhi,India,Kolkata etc.</p>
				</div>
				<div>
				    <h3 className="mb-2 font-semibold">Tags : </h3>
					<input className="w-full" type="text" placeholder="What type of NGO are you"  value={tags} onChange={(e)=>setTags(e.target.value)}  />
					<p>*Choose from education,feeding,social work,donating</p>
				</div>
				<div>
				    <h3 className="mb-2 font-semibold">Image : </h3>
					<input type="file"  accept='.jpeg, .png, .jpg' onChange={handleImageChange} />
				</div>
				<div>
				    <h3 className="mb-2 font-semibold">UPI QR Image : </h3>
					<input type="file"  accept='.jpeg, .png, .jpg' onChange={handleUPIImageChange} />
				</div>
				<div>
					<button className="mr-8 bg-red-500 hover:bg-red-600" onClick={()=>props.setEdit(false)}>Cancel</button>
					<button onClick={updateDetails}>Save</button>
				</div>
			</div>
		</div>
	)
}