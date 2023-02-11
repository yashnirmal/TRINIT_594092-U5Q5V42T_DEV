import Link from 'next/link'

export default function NewsCard(){
	return (
		<div className="w-full flex flex-col items-center text-xl">
			<div className=" bg-gray-100 p-4 rounded-xl flex flex-col gap-4 ">
				<Link href="/news/23" className="text-2xl font-bold hover:underline">Heading #1</Link>
				<p>Profile creation for NGOs and users/philanthropists: The NGOs can create
					profiles that include information about their previous works, their end goal, and
					their plans as to how they can achieve their goal and their overall impact on the
					environment and society, and their funding needs. Philanthropists can create
					profiles that include information about their donation preferences, such as what
					kind of NGOs they wish to donate to.
				</p>

				<div className="flex justify-between">
					<div>
						by <Link className="font-bold hover:underline" href="#">NGOID</Link>
					</div>
					<span className="text-gray-500">Date</span>
				</div>
			</div>
		</div>
	)
}