import { Logo } from "./Logo";
import { Search, BarChart, CheckSquare, Flag, Home, SquareStack, Users, LifeBuoy, Cog } from "lucide-react";
import { NavItem } from "./NavItem";
import { UsedSpaceWidget } from "./UsedSpaceWidget";
import { Profile } from "./Profile"


export function Sidebar() {
    return (
        <aside className="flex flex-col gap-6 border-r border-zinc-200 px-5 py-8">
            <Logo />

            <div className="mx-1 flex w-full items-center gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm">
                <Search className="h-5 w-5 text-zinc-500"/>
                <input type="text" className="flex-1 border-0 bg-transparent p-0 text-zinc-900 placeholder-zinc-600" placeholder="Buscar" />
            </div>

            <nav className="space-y-0.5">
                <NavItem title="Home" icon={Home} />
                <NavItem title="Dashboard" icon={BarChart} />
                <NavItem title="Projetos" icon={SquareStack} />
                <NavItem title="Atividades" icon={CheckSquare} />
                <NavItem title="Chamados" icon={Flag} />
                <NavItem title="Usuários" icon={Users} />

            </nav>

            <div className="mt-auto flex flex-col gap-6">
                <nav className="space-y-0.5">
                    <NavItem title="Suporte" icon={LifeBuoy} />
                    <NavItem title="Configurações" icon={Cog} />
                </nav>

                <UsedSpaceWidget />

                <div className="h-px bg-zinc-200"></div>

                <Profile />
            </div>
        </aside>
    )
}