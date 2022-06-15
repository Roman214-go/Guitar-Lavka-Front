import axios from "axios";

axios.defaults.baseURL = 'https://localhost:7287/'

export const getAllProducts = async (url) => {
    const res = await axios.get(url).then(res => res.data).catch(err => err = "error");
    return res;
}

export const getPopularProducts = async (url) => {
    const res = await axios.get(url).then(res => res.data).catch(err => err = "error")
    return res
}

export const getOneProduct = async (url) => {
    const res = await axios.get(url).then(res => res.data).catch(err => err = "error")
    return res
}