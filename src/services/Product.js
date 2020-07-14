import axios from 'axios';
import { environment } from '../environment';

const getAll = () => {
    return axios.get(`${environment.api}/products`);
};

const getTop5 = () => {
    return axios.get(`${environment.api}/products/top5`);
};

const checkout = (order) => {
    return axios.post(`${environment.api}/checkout`, order);
}

module.exports = {
    getAll,
    getTop5,
    checkout
};
