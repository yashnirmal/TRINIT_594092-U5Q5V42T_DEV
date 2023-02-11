import Image from "next/image"
import Link from 'next/link'

export default function NgoCard({n}){
	console.log(n)
	return (
		<div className="py-2 grid grid-cols-4 border-b-2 gap-4">
			<div className="col-span-1 aspect-square relative rounded-full overflow-hidden">
				<Image src={n?.image}
						fill
						className="object-cover"
					 />
			</div>
			<div className="col-span-3 text-xl flex flex-col gap-4 ml-4">
				<Link className="hover:underline font-bold" href={`/ngo/${n?._id}`}>{n?.name}</Link>
				<span><span className="font-semibold">Mission : </span>{n?.mission}</span>
			</div>
		</div>
	)
}