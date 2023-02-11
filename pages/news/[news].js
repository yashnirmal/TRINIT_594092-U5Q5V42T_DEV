import Link from "next/link";
import {useEffect,useState} from 'react'

export default function NewsArticle(){

	const [newsArticle,setNewsArticle]=useState({})

	function fetchNews(){
		const newsid = location.href.split('/').at(-1)
		fetch('/api/news/'+newsid)
		.then(res=>res.json())
		.then(data=>{
			if(data.status=='ok')
				setNewsArticle(data.data)
		})
	}

	useEffect(()=>{
		fetchNews()
	},[])

	return (
		<div className="w-full flex flex-col items-center text-xl mt-10">
			<div className="max-w-[800px] w-[90%] flex flex-col gap-6">
				<h1 className="text-3xl font-bold">{newsArticle?.heading}</h1>
				<div className="flex justify-between items-center">
					<span>by <Link className="font-semibold hover:underline" href={`/ngo/${newsArticle?.author}`}>{newsArticle?.authorName}</Link></span>
					<span>{newsArticle?.date}</span>
				</div>
				<p>
					{newsArticle?.description}
				</p>	
			</div>
		</div>
	)
}