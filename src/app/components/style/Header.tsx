"use client"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FeedIcon from '@mui/icons-material/Feed';
import SchoolIcon from '@mui/icons-material/School';
import {Button} from "@mui/material";
import {useRouter} from "next/navigation";

export default function Header() {
    const router = useRouter()
    const toggleDashboard = () => {
        router.push('/')
    };

    return (
        <>
            <header
                className={`h-[100px] w-screen flex items-center 
            border-b-2 border-solid border-slate-700
            `}>
                <Button className={`m-2`} onClick={toggleDashboard}>
                    <img width={160} className="hidden sm:block" src="/assets/LogoNaturatins.png" alt="unitins logo"/>
                </Button>
                <div className={`flex h-full w-full items-center justify-evenly`}>
                    <div className={`flex space-x-2`}>
                        <h3>Minha publicações</h3>
                        <FeedIcon/>
                    </div>
                    <div className={`flex space-x-2`}>
                        <h3>Meu perfil</h3>
                        <SchoolIcon/>
                    </div>
                    <div className={`flex space-x-2`}>
                        <h3>Perfil logado</h3>
                        <AccountCircleIcon/>
                    </div>
                </div>
            </header>
        </>
    )
}
