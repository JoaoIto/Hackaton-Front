"use client"
import React, {useRef, useState} from "react";
import {Button, Table, TableBody, TableCell, TableHead, TableRow} from "@mui/material";
import {useNavigate} from "react-router";
import Sidebar from "@/app/components/style/Sidebar";

export default function AgenciasPage() {
    const [dados, setDados] = useState([
        {
            nomeAgencia: "Agência 1",
            distanciaEstimada: 10,
            tempoEstimadoLocomocao: 30,
            densidadeProcessos: 100,
            dificuldadeRelativa: ((10 + 30 + 100) / 3).toFixed(2),
        },
        {
            nomeAgencia: "Agência 2",
            distanciaEstimada: 20,
            tempoEstimadoLocomocao: 40,
            densidadeProcessos: 200,
            dificuldadeRelativa: ((20 + 40 + 200) / 3).toFixed(2),
        },
    ]);
    const [agenciaSelecionada, setAgenciaSelecionada] = useState(null);
    const tabela = useRef(null);
    const [numSolicitacoes, setNumSolicitacoes] = useState(0);

    const handleSolicitar = () => {
        const novaSolicitacao = {
            status: "Solicitado",
            processo: "Processo 1",
            agencia: agenciaSelecionada,
            data: new Date().toISOString(),
        };

        setNumSolicitacoes(numSolicitacoes + 1)
    };
    return (
        <>
            <h2 className={`p-4 text-3xl font-bold text-cinzaEscuro`}>Agencias</h2>

            <Table sx={{ width: "100%" }}>
                <TableHead>
                    <TableRow>
                        <TableCell>Nome da agência</TableCell>
                        <TableCell>Distância estimada</TableCell>
                        <TableCell>Tempo estimado de locomoção</TableCell>
                        <TableCell>Densidade de processos</TableCell>
                        <TableCell>Dificuldade relativa</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {dados.map((agencia) => (
                        <TableRow key={agencia.nomeAgencia}>
                            <TableCell>{agencia.nomeAgencia}</TableCell>
                            <TableCell>{agencia.distanciaEstimada}</TableCell>
                            <TableCell>{agencia.tempoEstimadoLocomocao}</TableCell>
                            <TableCell>{agencia.densidadeProcessos}</TableCell>
                            <TableCell>{agencia.dificuldadeRelativa}</TableCell>
                            <Button
                                variant={"contained"}
                                className={`bg-verdeBackground p-2 text-white text-center items-center`}
                                onClick={() => handleSolicitar()}
                            >
                                Selecionar
                            </Button>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </>
    );
}
