import ajax from './axios.js'

//发送请求
export const testAxios = (paylod) => ajax('http://localhost:4000/news', paylod);