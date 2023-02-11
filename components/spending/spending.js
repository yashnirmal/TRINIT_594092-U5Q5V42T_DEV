import SpendingCard from "./spendingcard";
import {useState} from 'react';
import SpendEdit from "../edit/spendedit"

export default function Spending({isLoggedUser,spendings}){

	const [edit,setEdit] = useState(false)

	return (
		<div className="flex-1 w-full h-fit bg-gray-100 rounded-2xl">
			<div className="p-4 text-2xl font-semibold border-b-2">
				<h2>Spendings</h2>
			</div>
			<div className="p-4">
				{
					spendings.map((s)=>(
						<SpendingCard s={s} />
					))
				}
			</div>

			{
				isLoggedUser && <button className="w-full" onClick={()=>setEdit(true)}>Add Another Spend</button>
			}
			
			{edit && <SpendEdit setEdit={setEdit} />}
		</div>
	)
}