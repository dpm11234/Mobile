import axios from 'axios';
import { environment } from '../environment';

const getBills = (SDT) => {
    return axios.get(`${environment.api}/hoadon/gethd/${SDT}`)
}
const invoiceDetail = (maHD) => {
    return axios.get(`${environment.api}/hoadon/getcthd/${maHD}`)
}


module.exports = {
    getBills,
    invoiceDetail,
}

