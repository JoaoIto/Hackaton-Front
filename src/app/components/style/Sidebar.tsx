import AssignmentIcon from '@mui/icons-material/Assignment';
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import HomeIcon from "@mui/icons-material/Home";
import {useState} from "react";
import {Button} from "@mui/material";

export default function Sidebar() {
    const [numSolicitacoes, setNumSolicitacoes] = useState(0);
    const aumentaSolicitação = () => {
        setNumSolicitacoes(numSolicitacoes + 1);
    }

    return (
        <>
            {/* Menu Lateral */}
            <aside className="w-1/5 h-screen flex flex-col items-center bg-emerald-700
            border-r-2 border-solid border-slate-700 bg-verdeClaro text-white
            p-4">
                <h2 className={`bg-cinzaClaro p-2 text-2xl font-bold text-cinzaEscuro border-solid border-2 rounded`}>Menu Lateral</h2>
                <ul className={`h-2/4 flex flex-col justify-evenly items-center`}>
                    <li className={`font-medium flex items-center text-xl text-center p-2 rounded 
                    `}>
                        <a href="/processos">Processos</a>
                        <HomeIcon />
                    </li>
                    <li className={`font-medium flex items-center text-xl text-center p-2 rounded 
                    `}>
                        <Button className={`text-white`} onClick={aumentaSolicitação}>
                        <a href="/solicitacoes">Solicitações</a> <div className={`bg-laranja p-2 rounded`}>{numSolicitacoes}</div>
                        </Button>
                            <AssignmentIcon/>
                    </li>
                </ul>
            </aside>
            {/* Conteúdo Principal */}
        </>
    )
}
