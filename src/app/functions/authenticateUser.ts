import { getApiUrl } from "@/app/functions/getApiUrl";
import { getStorageItem } from "../utils/getStorageItem";

export async function authenticateUser(username: string, password: string) {
    try {
        const tokenResponse = await fetch(getApiUrl('/oauth/token'), {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: `grant_type=password&username=${username}&password=${password}`,
        });

        if (tokenResponse.ok) {
            const tokenData = await tokenResponse.json();
            const accessToken = tokenData.access_token;
            return accessToken;
        } else {
            console.error('Erro na autenticação do usuário:', tokenResponse.status);
            return null;
        }
    } catch (error) {
        console.error('Erro na solicitação de autenticação:', error);
        return null;
    }
}
