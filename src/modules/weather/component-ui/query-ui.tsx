
export function QueryUI({click}: {click: (query: string) => void}) {

    let query = '';

    function change(event: React.ChangeEvent<HTMLInputElement>){
        
        event.stopPropagation();
        query = event.currentTarget.value;
    }

    function search(){
        click(query);
    }

    return <div className="flex justify-center p-3">
        <label className="input input-bordered flex items-center gap-2">
            <input type="text" className="grow" placeholder="Search" onChange={change} />
            <button onClick={search}>
                <svg xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 16 16" 
                    fill="currentColor" 
                    className="w-4 h-4 opacity-70">
                        <path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" />
                </svg>
            </button>
        </label>
    </div> 
}