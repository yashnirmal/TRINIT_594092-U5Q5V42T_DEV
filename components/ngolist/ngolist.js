import Link from 'next/link'
import NgoCard from "./ngocard";

export default function NgiList(){
	return (
		<div className="flex-1 w-full h-fit bg-gray-100 rounded-2xl">
			<div className="p-4  border-b-2 flex justify-between items-center">
				<h2 className="font-semibold text-2xl">Discover NGOs</h2>
				<Link className="underline" href="/ngo">More</Link>
			</div>
			<div className="p-4">
				<NgoCard />
				<NgoCard />
				<NgoCard />
				<NgoCard />
				<NgoCard />
				
			</div>
		</div>
	)
}