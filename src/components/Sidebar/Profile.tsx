import { LogOut } from "lucide-react"

export function Profile() {
    return (
        <div className="grid items-center gap-3 grid-cols-(--profile-grid)">
            <img
                src="http://github.com//flaviabrunetta.png"
                alt=""
                className="h-10 w-10 rounded-full"
            />
            <div className="flex flex-col truncate">
                <span className="text-sm font-semibold text-zinc-700">
                    Flávia Brunetta
                </span>
                <span className="text-sm text-zinc-500 truncate">flaviabrunetta@saasoftware.com</span>
            </div>
            <button type="button" className="ml-auto p-2 rounded-md hover:bg-zinc-50">
                <LogOut className="h-5 w-5 text-zinc-500" />
            </button>
        </div>
    );
}