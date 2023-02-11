export default function CreateNews(){

	const date  = new Date()
	const dateToday = `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`

	return (
		<div className="w-full flex justify-center mt-10">
			<div className="w-[50%] flex flex-col gap-10">
				<div className="text-3xl flex justify-between items-center">
					<h1 className="font-bold">Lets share this news with everyone</h1>
					<span className="text-xl">{dateToday}</span>
				</div>
				<div>
					<h2 className="text-2xl font-semibold mb-2">Heading</h2>
					<input className="w-full" type="text" placeholder="Heading" />
				</div>	
				<div>
					<h2 className="text-2xl font-semibold mb-2">Description</h2>
					<textarea className="w-full" type="text" placeholder="Description" />
				</div>	

				<div>
					<button>Publish</button>
				</div>
			</div>
		</div>
	)
}