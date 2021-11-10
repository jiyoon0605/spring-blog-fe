import {UserInfo} from "@/model/Auth";
import {getAxios} from "@/api/AxiosCofig";

export function createAccount(data: UserInfo): Promise<any> {
    return getAxios().post("/auth/user", data);
}