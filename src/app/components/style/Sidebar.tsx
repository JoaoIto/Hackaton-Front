import AssignmentIcon from '@mui/icons-material/Assignment';
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import HomeIcon from "@mui/icons-material/Home";

export default function Sidebar() {
    return (
        <>
            {/* Menu Lateral */}
            <aside className="w-1/5 h-screen flex flex-col bg-emerald-700
            border-r-2 border-solid border-slate-700 text-black
            p-4">
                <h2 className={`text-2xl font-bold font-medium`}>Menu Lateral</h2>
                <ul className={`h-2/4 flex flex-col justify-evenly`}>
                    <li className={`font-medium flex items-center text-lg text-center p-2 rounded 
                    `}>
                        <a href="/processos">Processos</a>
                        <HomeIcon />
                    </li>
                    <li className={`font-medium flex items-center text-lg text-center p-2 rounded 
                    `}>
                        <a href="/solicitacoes">Solicitações de vistoria</a>
                    <AssignmentIcon/>
                    </li>
                    <li className={`font-medium flex items-center text-lg text-center p-2 rounded
                    `}>
                        <a href="/tecnicos">Técnicos</a>
                        <AccountCircleIcon />
                    </li>
                </ul>
            </aside>
            {/* Conteúdo Principal */}
        </>
    )
}
