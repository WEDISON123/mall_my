import axios from './config'

export const getSwiperList = () => {
    return axios.get('/swiperList')
}
export const getMoreList = () => {
    return axios.get('/moreList')
}
export const getProductList = () => {
    return axios.get('/productList')
}
export const getnoteList = () => {
    return axios.get('/noteList')
}