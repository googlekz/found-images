import { http } from './options';

interface IData {
    url: string;
    params?: {
        [key: string]: string | number | null
    }
}


export const get = (data: IData) => {
    return http().get(data.url, { params: data.params });
};
