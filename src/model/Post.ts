export interface Post {
    TITLE: string,
    IMAGE_URL?: string,
    ID: 0,
    CREATED_AT: string,
    CONTENTS: string,
    VIEWS: number
}

export interface PostDetail {
    TITLE: string,
    CONTENTS: string,
    CREATED_AT: string,
    EDITED_AT?: string,
    WRITER: string,
    ID: number,
    VIEWS: number,
    NICKNAME: string,
    EMAIL: string
}

export type Level = 1 | 2 | 3 | 4 | 5 | 6
