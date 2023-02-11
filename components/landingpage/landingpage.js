export default function LandingPage(){
	return (
		<div className="w-full h-[70vh] flex flex-col gap-8 items-center justify-center">
			<h1 className="text-6xl font-bold">
				Bringing together a <span className="highlight">Cause</span>
			</h1>
			<p className="text-3xl font-semibold">We Connect <span className="highlight">Philantropists</span> with <span className="highlight">NGOs</span></p>
			<p className="text-3xl font-semibold">Lets make <span className="highlight">world</span> a better place</p>
			<div className="flex gap-6">
				<button>Log In</button>
				<button>Sign Up</button>
			</div>
		</div>
	)
}