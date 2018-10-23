import axios from 'axios';

const API = process.env.VUE_APP_API;

console.log(API);

export const fetchTodos = () => axios.get(`${API}/todos`);
