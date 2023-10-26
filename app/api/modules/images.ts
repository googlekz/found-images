import { get } from '../main/http';
import type { IImages } from '../interfaces/images';

export const getImages = async (): Promise<IImages[] | []> => {
    try {
        const { data } = await get({
            url: '/photos/random',
            params: {
                count: 8
            }
        });

        return data;
    } catch (e) {
        return [];
    }
};
