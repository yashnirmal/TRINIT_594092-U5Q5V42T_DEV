import NewsCard from "../../components/newscard/newscard";
import {useEffect,useState} from 'react';

export default function News(){

	const [newsArr,setNewsArr] = useState([]);

	function getAllNews(){
		fetch('/api/news')
		.then(res=>res.json())
		.then(data=>{
			if(data.status=='ok')
			setNewsArr((data.data).reverse())
		})
	}

	useEffect(()=>{
		getAllNews()
	},[])

	return (
		<div className="w-full flex flex-col items-center text-xl">
			<h1 className="text-3xl font-bold mb-8">News</h1>
			<div className="max-w-[1000px] w-[90%] flex flex-col gap-6">
				{
					newsArr.map((n)=>(
						<NewsCard n={n} />
					))
				}
			</div>
		</div>

	)
}