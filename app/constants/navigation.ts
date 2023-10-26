import { INavigation } from '../api/interfaces/navigation';

export const DEFAULT_NAVIGATION = [
    {
        id: 0,
        to: '/',
        text: 'Поиск',
        logo: require('../../src/assets/images/icons/loupeWhite.svg')
    },
    {
        id: 1,
        to: '/favorites',
        text: 'Избранное',
        logo: require('../../src/assets/images/icons/heart.svg')
    }
] as INavigation[];


export const NAVIGATION_KEYS = {
    home: 'home',
    image: 'image',
    favorites: 'favorites',
};
