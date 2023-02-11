import NewsCard from "../../components/newscard/newscard"
export default function News(){
	return (
		<div className="w-full flex flex-col items-center text-xl">
			<h1 className="text-3xl font-bold mb-8">News</h1>
			<div className="max-w-[1000px] w-[90%] flex flex-col gap-6">
				<NewsCard />
				<NewsCard />
				<NewsCard />
				<NewsCard />
			</div>
		</div>

	)
}