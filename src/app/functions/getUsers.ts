import {getApiUrl} from "@/app/functions/getApiUrl";

export async function getUsers(){
    const response = await fetch(getApiUrl('/users'));
    const data = response.json();
    console.log(data);
}

getUsers();