import axios from 'axios';
import { environment } from '../environment';

const login = (user) => {
    return axios.post(`${environment.api}/auth/login`, user);
}

module.exports = {
    login,
}

