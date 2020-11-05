import axios from 'axios'

//封装ajax
export default function ajax(url = '', params = {}, type = 'GET') {
  let promise;
  type = type.toUpperCase()
  return new Promise(((resolve, reject) => {
    if (type === 'GET') {
      let str = '';
      Object.keys(params).forEach((value, index) => {
        if (index + 1 === Object.keys(params).length) {
          str += value + '=' + params[value];
        } else {
          str += value + '=' + params[value] + '&';
        }
      });
      url += '?' + str;
      promise = axios.get(url);
    } else if (type === 'POST') {
      promise = axios.post(url, params);
    }
    promise.then((response) => {
      resolve(response.data);
    }).catch((error) => {
      reject(error);
    });
  }))
}