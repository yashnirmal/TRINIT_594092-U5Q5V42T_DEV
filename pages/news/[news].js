import Link from "next/link"

export default function NewsArticle(){
	return (
		<div className="w-full flex flex-col items-center text-xl mt-10">
			<div className="max-w-[800px] w-[90%] flex flex-col gap-6">
				<h1 className="text-3xl font-bold">Heading #1</h1>
				<div className="flex justify-between items-center">
					<span>by <Link className="font-semibold hover:underline" href="/ngo/1">NGO Name</Link></span>
					<span>Date</span>
				</div>
				<p>
					profiles that include information about their previous works, their end goal, and
					their plans as to how they can achieve their goal and their overall impact on the
					environment and society, and their funding needs. Philanthropists can create
					profiles that include information about their donation preferences, such as what
					kind of NGOs they wish to donate to.
				</p>	
			</div>
		</div>
	)
}