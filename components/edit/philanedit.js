export default function PhilanEdit({setEdit}){


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


	return (
		<div className="w-[100vw] h-[100vh] bg-black/50 absolute top-0 left-0 z-100 flex justify-center items-center">
			<div className="max-h-[90%] w-[80%] rounded-2xl p-8 bg-white flex flex-col gap-6">
				<div>
				    <h3 className="mb-2 font-semibold">Name : </h3>
					<input className="w-full" type="text" placeholder="Name" />
				</div>
				<div>
				    <h3 className="mb-2 font-semibold">Description : </h3>
					<input className="w-full" type="text" placeholder="Description" />
				</div>
				<div>
				    <h3 className="mb-2 font-semibold">Tags : </h3>
					<input className="w-full" type="text" placeholder="What type of NGOs you like to work with" />
					<p>*Choose from education,feeding,social work,donating</p>
				</div>
				<div>
				    <h3 className="mb-2 font-semibold">Image : </h3>
					<input type="file"  accept='.jpeg, .png, .jpg' onChange={handleImageChange} />
				</div>
				<div>
					<button className="mr-8 bg-red-500 hover:bg-red-600" onClick={()=>setEdit(false)}>Cancel</button>
					<button>Save</button>
				</div>
			</div>
		</div>
	)
}