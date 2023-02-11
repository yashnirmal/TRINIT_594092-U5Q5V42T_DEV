import Link from 'next/link'

export default function NewsCard({n}){

	return (
		<div className="w-full flex flex-col items-center text-xl">
			<div className="w-full bg-gray-100 p-4 rounded-xl flex flex-col gap-4 ">
				<Link href={`/news/${n?._id}`} className="text-2xl font-bold hover:underline">{n?.heading}</Link>
				<p>{n?.description}
				</p>

				<div className="flex justify-between">
					<div>
						by <Link className="font-bold hover:underline" href={`/ngo/${n?.author}`}>{n?.authorName}</Link>
					</div>
					<span className="text-gray-500">{n?.date}</span>
				</div>
			</div>
		</div>
	)
}