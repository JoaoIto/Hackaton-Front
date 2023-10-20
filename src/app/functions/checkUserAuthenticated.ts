import { getStorageItem } from '../utils/getStorageItem';
import {getApiUrl} from "./getApiUrl"

export const checkUserAuthenticated = async () => {
    const userToken = getStorageItem(process.env.ACESS_TOKEN as string);

    // Verifica se o usuário está autenticado
    if (!userToken) {
        return false;
    }

    // Faz uma requisição para verificar o perfil do usuário
    const response = await fetch(getApiUrl('/users/authenticated'), {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${userToken}`,
        },
    });

    if (response.ok) {
        const data = await response.json();
        return data.profile === 'ADMIN' || data.profile === 'TÉCNICO';
    } else {
        return false;
    }
};
