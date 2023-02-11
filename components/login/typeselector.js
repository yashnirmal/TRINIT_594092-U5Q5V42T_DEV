export default function TypeSelector({setType}){

	function typeClicked(e){
		document.querySelector("[data-selected='true']").dataset.selected="false"
		e.target.dataset.selected = 'true'
		setType(e.target.dataset.type)
	}

	return (
		<div className="flex justify-between gap-4">
			<div onClick={typeClicked} data-type='philan' className="w-full text-center font-semibold p-2 bg-purple-200 rounded-md border-2 border-transparent data-[selected=true]:border-purple-400 cursor-pointer" data-selected="true">
				Philanthropist
			</div>

			<div onClick={typeClicked} data-type='ngo' className="w-full text-center font-semibold p-2 bg-purple-200 rounded-md border-2 border-transparent data-[selected=true]:border-purple-400 cursor-pointer">
				NGO
			</div>
		</div>
	)
}