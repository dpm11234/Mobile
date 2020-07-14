import axios from 'axios';
import { environment } from '../environment';

const getAll = () => {
    return axios.get(`${environment.api}/products`);
};

const getTop5 = () => {
    return axios.get(`${environment.api}/products/top5`);
};
const Login = () => {
    return axios.get(`${environment.api}/login`)
}
module.exports = {
    getAll,
    getTop5,
    Login,
};
