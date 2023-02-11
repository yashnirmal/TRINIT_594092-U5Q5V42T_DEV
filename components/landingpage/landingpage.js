import {useRouter} from 'next/router';
import {useEffect,useState} from 'react'

export default function LandingPage(){

	const router = useRouter()
	const [loggedIn,setLoggedIn] = useState(false)

	useEffect(()=>{
		if(localStorage.getItem('usertoken')) setLoggedIn(true);
		else setLoggedIn(false);
	})

	return (
		<div className="w-full h-[70vh] flex flex-col gap-8 items-center justify-center">
			<h1 className="text-6xl font-bold">
				Bringing together a <span className="highlight">Cause</span>
			</h1>
			<p className="text-3xl font-semibold">We Connect <span className="highlight">Philantropists</span> with <span className="highlight">NGOs</span></p>
			<p className="text-3xl font-semibold">Lets make <span className="highlight">world</span> a better place</p>
			{
				(!loggedIn) && <div className="flex gap-6">
					<button onClick={()=>router.push("/login")}>Log In</button>
					<button onClick={()=>router.push("/signup")}>Sign Up</button>
				</div>
			}
			
		</div>
	)
}