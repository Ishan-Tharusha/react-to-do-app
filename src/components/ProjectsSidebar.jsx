
import Button from "./Button";


export default function ProjectsSidebar () {
    return (<aside className="W-1/3 PX-8 PY-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
        <h2 className="mb-8 font-bold uppercase md:text-xl test-stone-200">Your Projects</h2>
        <div>
            <Button >
                +Add Project
            </Button>
        </div>
        <ul>

        </ul>
    </aside>
    );
}