"use client"
import {Table, TableBody, TableCell, TableHead, TableRow} from "@mui/material";
import React, {useState} from "react";

export default function SolicitcoesPage(){

    const [dados, setDados] = useState([
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

    return(
        <div className={`flex flex-col w-full`}>
            <h2 className={`p-4 text-3xl font-bold text-cinzaEscuro`}>Solicitacoes</h2>

            <Table className={`w-full`}>
                <TableHead>
                    <TableRow>
                        <TableCell className={`text-2xl`}>Status</TableCell>
                        <TableCell className={`text-2xl`}>Nome do processo</TableCell>
                        <TableCell className={`text-2xl`}>Data</TableCell>
                        <TableCell className={`text-2xl`}>Regional</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {dados.map((processo) => (
                        <TableRow className={`p-2 bg-cinzaClaro`} key={processo.nomeProcesso}>
                            <TableCell>{processo.status}</TableCell>
                            <TableCell>{processo.nomeProcesso}</TableCell>
                            <TableCell>{processo.data}</TableCell>
                            <TableCell>{processo.regional}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>

        </div>
    )
}