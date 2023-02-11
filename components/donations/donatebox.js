export default function DonateBox({upi}){
	return (
		<div className="w-[100vw] h-[100vh] bg-black/50 fixed top-0 left-0 z-100 flex justify-center items-center">
			<div className="max-h-[90%] w-[80%] overflow-y-scroll rounded-2xl p-8 bg-white flex flex-col items-center justify-center gap-6">
				<div className="w-[200px] aspect-square relative">
					<Image
						src={upi}
						fill
					 />
				</div>	
				<div>
					<button>Close</button>
				</div>
			</div>
		</div>
	)
}