import { Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";


export default async function ProcessosPage() {
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
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
}
