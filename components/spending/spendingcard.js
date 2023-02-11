export default function SpendingCard(){
	return (
		<div className="flex flex-col text-xl gap-6 p-2 border-b-2">
			<h2 className="font-semibold">Heading</h2>
			<p>Description</p>
			<span><span className="font-semibold">Amount :</span> Rs3000</span>
			<span>Date</span>
		</div>
	)
}