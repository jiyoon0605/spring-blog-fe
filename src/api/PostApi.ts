import {getAxios, getAxiosAuth} from "@/api/AxiosConfig";

export function getPostList(): Promise<any> {
    return getAxios().get("/post/list");
}

export function getPostDetail(id): Promise<any> {
    return getAxios().get(`/post/${id}`);
}

export function createNewPost(data): Promise<any> {
    return getAxiosAuth().post('/post/', data);
}

export function increaseView(id): Promise<any> {
    return getAxios().put(`/post/view/${id}`)
}