import jwt_decode from 'jwt-decode'
import {useState,useEffect} from 'react';


export default function PhilanEdit({setEdit,name,description,tags,image}){

	const [Ename,setEName]= useState(name);
	const [Edescription,setEDescription] = useState(description);
	const [Etags,setETags] = useState(tags);
	const [Eimage,setEImage] = useState(image);



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
		setEImage(base64)
	}


	function updateDetails(){
		const reqOptions = {
	      method: "POST",
	      headers: {
	        "Content-Type": "application/json",
	        "Accept": "application/json",
	        "x-access-token": jwt_decode(localStorage.getItem("usertoken")).id
	      },
	      body: JSON.stringify({
	        name:Ename,
	        description:Edescription,
	        tags:Etags.split(","),
	        image:Eimage
	      }),
	    };

		fetch("/api/philan/update",reqOptions)
		.then(res=>res.json())
		.then(data=>{
			console.log(data)
			setEdit(false)

		})
	}



	return (
		<div className="w-[100vw] h-[100vh] bg-black/50 fixed top-0 left-0 z-100 flex justify-center items-center">
			<div className="max-h-[90%] w-[80%] rounded-2xl p-8 bg-white flex flex-col gap-6">
				<div>
				    <h3 className="mb-2 font-semibold">Name : </h3>
					<input className="w-full" type="text" placeholder="Name" value={Ename} onChange={e=>setEName(e.target.value)} />
				</div>
				<div>
				    <h3 className="mb-2 font-semibold">Description : </h3>
					<input className="w-full" type="text" placeholder="Description" value={Edescription} onChange={e=>setEDescription(e.target.value)} />
				</div>
				<div>
				    <h3 className="mb-2 font-semibold">Tags : </h3>
					<input className="w-full" type="text" placeholder="What type of NGOs you like to work with"  value={Etags} onChange={e=>setETags(e.target.value)}/>
					<p>*Choose from education,feeding,social work,donating</p>
				</div>
				<div>
				    <h3 className="mb-2 font-semibold">Image : </h3>
					<input type="file"  accept='.jpeg, .png, .jpg' onChange={handleImageChange} />
				</div>
				<div>
					<button className="mr-8 bg-red-500 hover:bg-red-600" onClick={()=>setEdit(false)}>Cancel</button>
					<button onClick={updateDetails}>Save</button>
				</div>
			</div>
		</div>
	)
}