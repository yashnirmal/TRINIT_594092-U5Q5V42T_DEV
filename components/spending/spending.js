import SpendingCard from "./spendingcard"

export default function Spending(){
	return (
		<div className="flex-1 w-full h-fit bg-gray-100 rounded-2xl">
			<div className="p-4 text-2xl font-semibold border-b-2">
				<h2>Spendings</h2>
			</div>
			<div className="p-4">
				<SpendingCard />
				<SpendingCard />
				<SpendingCard />
				<SpendingCard />
				<SpendingCard />
			</div>

			<button className="w-full">Add Another Spend</button>
		</div>
	)
}