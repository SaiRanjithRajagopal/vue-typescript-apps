import axios from 'axios';
import { Products } from '@/Model.d/Model'

export const sairamApi = axios.create({
    baseURL: 'https://fakestoreapi.com',
  });

export async function GetAllProducts(): Promise<Products[]> {
    const response = await sairamApi.get('/products');
    return (response.data as Products[]);
  }