import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)
// export const axiosConfig = {
//     baseURL: '127.0.0.1:8001/v1/'
// }

// export const request = axios.create({
//     baseURL: '127.0.0.1:8001/v1/'
// });

export default () => {
    return axios.create({
        baseURL: `http://127.0.0.1:8001/v1/`
    })
}