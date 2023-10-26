import axios from 'axios';

export const http = (
    customHeaders = {
        Authorization: 'Client-ID pBxnatduyLLJqCBHPYBBXd8deuyPwbvFHkM3amS1Ygc'
    },
) => {

    const headers = {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        ...customHeaders,
    };

    return axios.create({
        baseURL: 'https://api.unsplash.com',
        headers,
        timeout: 60000,
    });
};
