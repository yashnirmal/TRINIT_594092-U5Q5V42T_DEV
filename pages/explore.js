import NgoCard from "../components/ngolist/ngocard"

export default function Explore(){
	return (
		<div className="w-full pt-10 flex justify-center">
			<div className="w-[90%] max-w-[800px] flex flex-col">
				<input className="w-full" type="text" placeholder="Search NGOs" />
				<div>
					<NgoCard />
					<NgoCard />
					<NgoCard />
				</div>
			</div>
		</div>
	)
}