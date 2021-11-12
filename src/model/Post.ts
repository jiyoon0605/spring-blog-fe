export interface Post {
    TITLE: string,
    IMAGE_URL?: string,
    ID: 0,
    CREATED_AT: string,
    CONTENTS:string,
}

export interface PostDetail{
    TITLE:string,
    CONTENTS:string,
    CREATED_AT:string,
    EDITED_AT?:string,
    WRITER:string,
    ID:number,
    VIEWS:number,
    IMAGE_URL?: string,

}