import axios from 'axios';

const _axios = axios.create({
  baseURL: 'https://open-coder-api.herokuapp.com',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/pdf',
  },
});

export const get = async (endpoint: string) => {
  return await _axios.get(endpoint).then((res: any) => res?.data);
};

export const post = async (endpoint: string, data: any) => {
  return await _axios.post(endpoint, data);
};

export const put = async (endpoint: string, data: any) => {
  return await _axios.put(endpoint, data);
};

export const remove = async (endpoint: string) => {
  return await _axios.delete(endpoint);
};
