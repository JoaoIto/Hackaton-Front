import { getApiUrl } from "@/app/functions/getApiUrl";
import { getStorageItem } from "../utils/getStorageItem";
import {Processo} from "@/app/interface/Processos";

export async function getProcessos(): Promise<Processo[]> {
    const userToken = getStorageItem(process.env.ACESS_TOKEN as string);

    try {
        const response = await fetch(getApiUrl('/process'), {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${userToken}`,
                "Content-Type": "application/json",
            },
        });

        if (response.ok) {
            const data = await response.json() as Processo[];
            return data; // Retorna os dados obtidos da API
        } else {
            throw new Error(`Erro ao buscar os processos: ${response.status}`);
        }
    } catch (error) {
        console.error(error);
        return []; // Retorna um array vazio em caso de erro
    }
}
