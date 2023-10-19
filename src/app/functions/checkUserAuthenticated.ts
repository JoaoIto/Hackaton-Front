import { getStorageItem } from '../utils/getStorageItem';

export const checkUserAuthenticated = () => {
    const userToken = getStorageItem(process.env.NEXT_PUBLIC_USER_TOKEN as string);

    return !!userToken;
}
