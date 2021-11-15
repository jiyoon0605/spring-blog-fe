import axios from 'axios';


export const getAxios = () => {
    return axios.create({
        baseURL: 'http://localhost:8080'
    })
}

export const getAxiosAuth = () => {
    return axios.create({
        baseURL: 'http://localhost:8080',
        headers: {
            Authorization: localStorage.getItem('accessToken')
        }
    })
}
