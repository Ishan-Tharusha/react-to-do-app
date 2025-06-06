
import { useRef } from "react";
import Input from "./Input";

export default function NewProject(onAdd) {

    const title= useRef();
    const description= useRef();
    const date= useRef();

    function handleSave(){
        const enterTitle = title.current.value;
        const enterDescription = description.current.value;
        const enterDate = date.current.value;

        //validations .....

        onAdd({
            title: enterTitle,
            description: enterDescription,
            date: enterDate
        });
    
    }

    
    return(
        <div className="w-[35rem] mt-16">
            <menu className="flex items-center justify-end my-4 gap-4">
                <li>
                    <button className="text-stone-800 hover:text-stone-950">Cansal</button>
                </li>
                <li>
                    <button className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
                    onClick={handleSave}>Save</button>
                </li>
            </menu>
            <div>
                <Input type="text" ref={title} label="Title"/>
                <Input ref={description} label="Description" textarea/>
                <Input type="date" ref={date} label="Due Date"/>
            </div>
        </div>
    );
}