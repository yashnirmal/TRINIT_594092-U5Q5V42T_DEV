export default function SpendingCard({s}){
	return (
		<div className="flex flex-col text-xl gap-6 p-2 border-b-2">
			<h2 className="font-semibold">{s?.heading}</h2>
			<p>{s?.description}</p>
			<span><span className="font-semibold">Amount :</span> Rs {s?.amount}</span>
			<span>{s?.date}</span>
		</div>
	)
}