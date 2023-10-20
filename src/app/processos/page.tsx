"use client"
import {Button, Table, TableBody, TableCell, TableHead, TableRow} from "@mui/material";
import {useState} from "react";
import AgenciasPage from "@/app/components/Regionais";


export default function ProcessosPage() {
    const [agenciasTabela, setAgenciasTabela] = useState<boolean>(false);
    const [processos, setprocessos] = useState([
        {
            status: "Aberto",
            nomeProcesso: "Processo 1",
            tecnico: "Técnico 1",
            data: "2023-07-20",
            regional: "Regional 1",
        },
        {
            status: "Em andamento",
            nomeProcesso: "Processo 2",
            tecnico: "Técnico 2",
            data: "2023-07-21",
            regional: "Regional 2",
        },
    ]);

    const mostrarAgencias = () => {
        setAgenciasTabela(!agenciasTabela);
    };


    return (
        <div className={`flex flex-col w-full`}>
            <h2 className={`p-4 text-3xl font-bold text-cinzaEscuro`}>Processos</h2>

            <Table className={`w-full`}>
                <TableHead>
                    <TableRow>
                        <TableCell className={`text-2xl`}>Status</TableCell>
                        <TableCell className={`text-2xl`}>Nome do processo</TableCell>
                        <TableCell className={`text-2xl`}>Técnico</TableCell>
                        <TableCell className={`text-2xl`}>Data</TableCell>
                        <TableCell className={`text-2xl`}>Regional</TableCell>
                    </TableRow>
                </TableHead>''
                <TableBody>
                    {processos.map((processo) => (
                        <TableRow className={`p-2 bg-cinzaClaro`} key={processo.nomeProcesso}>
                            <TableCell>{processo.status}</TableCell>
                            <TableCell>{processo.nomeProcesso}</TableCell>
                            <TableCell>{processo.tecnico}</TableCell>
                            <TableCell>{processo.data}</TableCell>
                            <TableCell>{processo.regional}</TableCell>
                        <Button
                        className={`bg-verdeBackground p-2 text-white text-center items-center self-center`}
                        onClick={mostrarAgencias}
                        >
                            Solicitar
                        </Button>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>

            {agenciasTabela && (
                <AgenciasPage/>
            )}
        </div>
    );
}
