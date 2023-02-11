import Link from 'next/link';
import Image from 'next/image'
import {useState,useEffect} from 'react'

export default function Navbar({showMenu,setShowMenu}){

	const [logged,setLogged] = useState(false)

	useEffect(()=>{
		if(!localStorage.getItem('usertoken')) setLogged(false)
			else setLogged(true)
	})

	return (
		<div className="w-full min-h-[80px] max-h-fit flex md:justify-around justify-between md:px-0 px-4 items-center shadow-black relative">
			<Link className="sm:text-2xl text-xl font-bold" href="/" className="flex items-center py-2">
				<h2 className="text-3xl font-bold">
					Logo
				</h2>	
			</Link>
			{
				(!logged)?
				<div className="md:flex hidden items-center gap-8 text-xl" >
					<Link className="hover:underline" href="/news">News</Link>
					<Link className="font-semibold p-2 bg-purple-500 text-white rounded-md" href="/login">Log In</Link>
					<Link className="font-semibold p-2 bg-purple-500 text-white rounded-md" href="/signup">Sign Up</Link>
				</div>
				:
				<div className="md:flex hidden items-center gap-8 text-xl">
					<Link className="hover:underline" href="/news">News</Link>
					<Link className="hover:underline" href="/philan/1">Profile</Link>
					<button className="bg-red-400 hover:bg-red-500" onClick={()=>{localStorage.clear(); location.reload()}}>Log Out</button>
				</div>	
			}
		</div>
	)
}