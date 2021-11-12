import {getAxios} from "@/api/AxiosCofig";

export function getPostList(): Promise<any> {
    return getAxios().get("/post/list");
}

export function getPostDetail(id): Promise<any> {
    return getAxios().get(`/post/${id}`);
}