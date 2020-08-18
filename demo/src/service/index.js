import axios from 'axios';

export const request1 = axios.create({
  baseURL: "http://127.0.0.1:3000"
})

export const request2 = axios.create({
  baseURL: "http://rap2api.taobao.org/app/mock/117555"
})

