import axios from 'axios';
import SERVICE from './serviceConfig';

// 配置信息
const axiosInstance = axios.create({
  baseURL: SERVICE.base,
  timeout: 4000,
});

// 请求拦截
axiosInstance.interceptors.request.use(
  (config) => {
    console.log('请求拦截：', config);
    return config;
  },
  (error) => {
    console.log('请求错误', error.message);
    return error;
  }
);

// 相应拦截
axiosInstance.interceptors.response.use(
  (config) => {
    console.log('响应拦截：', config);
    // const CODE = Number(response.data.code);
    // console.log(CODE);
    return config.data;
  },
  (error) => {
    if (error.message.includes('timeout')) {
      console.error(`${error.config.url}请求超时`);
    }
    return error;
  }
);

export default axiosInstance;
