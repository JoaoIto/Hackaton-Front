export const getStorageItem = (userToken: string) => {
    const userTokenEnv = process.env.NEXT_PUBLIC_USER_TOKEN as string;
    const token = localStorage?.getItem(userTokenEnv);

    return token;
};
