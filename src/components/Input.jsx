export default function Input ({ textarea , label , ...props}){

    const classess = "w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-non focus:bordeer-stone-600"

    return(
        <p className="flex flex-col gap-1 my-4">
            <label className="text-sm font-bold uppercase test-stone-500">{label}</label>
            {textarea ? 
            <textarea className={classess} {...props}/> 
            : <input className={classess} {...props}/>}
         </p>
    );
}