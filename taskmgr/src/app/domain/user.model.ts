export interface User {
    id?: string; // 加问号表示可有可无，因为刚开始是没有对象的
    emial: string;
    password: string;
    name: string;
    avatar: string;
}