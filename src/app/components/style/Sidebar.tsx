import AssignmentIcon from '@mui/icons-material/Assignment';
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import HomeIcon from "@mui/icons-material/Home";

export default function Sidebar() {
    return (
        <>
            {/* Menu Lateral */}
            <aside className="w-1/5 h-screen flex flex-col items-center bg-emerald-700
            border-r-2 border-solid border-slate-700 bg-verdeClaro text-white
            p-4">
                <h2 className={`bg-cinzaClaro p-2 text-2xl font-bold font-bold text-cinzaEscuro border border-solid border-2 rounded`}>Menu Lateral</h2>
                <ul className={`h-2/4 flex flex-col justify-evenly items-center`}>
                    <li className={`font-medium flex items-center text-xl text-center p-2 rounded 
                    `}>
                        <a href="/processos">Processos</a>
                        <HomeIcon />
                    </li>
                    <li className={`font-medium flex items-center text-xl text-center p-2 rounded 
                    `}>
                        <a href="/solicitacoes">Solicitações</a>
                    <AssignmentIcon/>
                    </li>
                    <li className={`font-medium flex items-center text-xl text-center p-2 rounded
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
