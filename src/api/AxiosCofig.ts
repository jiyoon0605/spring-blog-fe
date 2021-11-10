import axios from 'axios';


export const getAxios=()=>{
    return axios.create({
        baseURL: 'http://localhost:8080'
    })
}
