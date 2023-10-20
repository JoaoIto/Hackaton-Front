"use client"
import SearchIcon from '@mui/icons-material/Search';
import {Button, Grid, TextField} from "@mui/material";
import {useRouter} from "next/navigation";
import {Title} from "./Title";
import {ChangeEvent, useState} from "react";

export default function Header() {
    const router = useRouter();
    const [pesquisaProcesso, setPesquisaProcesso] = useState<string>('');

    const handleProcesso = (event: ChangeEvent<HTMLInputElement>) => {
        setPesquisaProcesso(event.target.value);
    };

    const handleSearchSubmit = () => {
        const searchData = {
            nome: pesquisaProcesso,
        };
        console.log('Dados da Pesquisa:', searchData);
    };




    const toggleDashboard = () => {
        router.push('/')
    };


    return (
        <>
            <header
                className={`h-[400px] w-screen flex items-center justify-evenly
            border-b-2 border-solid border-slate-700 bg-[url('/assets/backgroundPlant.png')] bg-opacity-60 bg-multiply bg-cover
            `}>
                    <Title/>

                <form action=""></form>
                <Grid className={`flex w-1/2  space-x-2`}>
                    <TextField
                        className={`bg-cinzaClaro rounded `}
                        placeholder={`Nome do processo: `}
                        required
                        label="Nome do processo"
                        variant="outlined"
                        fullWidth
                        value={pesquisaProcesso}
                        onChange={handleProcesso}
                    />

                    <Button
                        onClick={handleSearchSubmit}
                        className={`bg-verdeClaro`}
                        variant="contained"
                        color="primary"
                    >
                        <SearchIcon/>
                    </Button>
                </Grid>

            </header>
        </>
    )
}
