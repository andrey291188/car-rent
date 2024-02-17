import axios from 'axios';
import { ParamsRequest } from '../types/types';

axios.defaults.baseURL = 'https://65cc52c9dd519126b83e4069.mockapi.io/api/adverts'


export async function getRequest(params: ParamsRequest) {

    const page = params.page ? `?page=${params.page}&limit=12` : "?page=1&limit=12";
    const query = params.query ? `&search=${params.query}` : "";
    const queryTotal = params.query ? `?search=${params.query}` : "";

    const { data } = await axios.get(`/${page}${query}`);
    const { data: total } = await axios.get(`/${queryTotal}`)
   

    return {total: total.length, data};
  }