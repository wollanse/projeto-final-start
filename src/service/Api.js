import axios from "axios";


export const Api = axios.create({
   baseURL:"http://localhost:8080",
   timeout:5000,
   headers: { 'Content-Type': 'application/json' }
})
Api.interceptors.request.use((config) => {
   const token = localStorage.getItem('token')
   if (token) {
      config.headers = {
           ...config.headers,
           "Authorization": "Bearer " + token,
           "Access-Control-Allow-Origin": "*"
       }
   }
   return config
});

Api.interceptors.response.use((response) => {
   return response
});