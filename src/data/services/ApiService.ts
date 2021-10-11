import axios from 'axios';

const url= 'https://ediaristas-workshop.herohuapp.com'

export const ApiService = axios.create({
    baseURL: url,
    headers: {
        'Content-Type': 'application-json'
    }
});