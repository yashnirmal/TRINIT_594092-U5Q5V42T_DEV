import DonationCard from "./donationcard"

export default function Donations() {
	return (
		<div className="flex-1 w-full h-fit bg-gray-100 rounded-2xl">
			<div className="p-4  border-b-2">
				<h2 className="font-semibold text-2xl">Donations</h2>
			</div>
			<div className="p-4">
				<DonationCard />
				<DonationCard />
				<DonationCard />
				<DonationCard />
				<DonationCard />
			</div>
		</div>
	)
}