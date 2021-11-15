import {UserInfo} from "@/model/Auth";
import {getAxios} from "@/api/AxiosConfig";

export function createAccount(data: UserInfo): Promise<any> {
    return getAxios().post("/auth/user", data);
}

export function login(data): Promise<any> {
    return getAxios().post("/auth/login", data);
}