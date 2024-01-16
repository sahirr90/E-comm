import axios from 'axios';

const CUSTOMER_BASE_API_URL = 'http://localhost:8000/pay';

export function getAllCUSTOMERS(){
    return axios.get(CUSTOMER_BASE_API_URL);
}

export function createCustomer(customer){
    return axios.post(CUSTOMER_BASE_API_URL,employee);
}

export function getById(id){
    return axios.get(`${CUSTOMER_BASE_API_URL}/${id}`);
}

export function updateCustomer(id, customer){
    return axios.put(`${CUSTOMER_BASE_API_URL}/${id}`, employee);
}

export function deleteCustomer(id){
    return axios.delete(`${CUSTOMER_BASE_API_URL}/${id}`);
}
