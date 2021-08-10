import axios from 'axios';
import SERVICE from './serviceConfig';

// 配置信息
const axiosInstance = axios.create({
  baseURL: SERVICE.base,
  timeout: 10000,
});

// 请求拦截
axiosInstance.interceptors.request.use(
  (config) => {
    // console.log('请求拦截：', config);
    setParams(config);
    return config;
  },
  (error) => {
    console.log('请求错误', error.message);
    return error;
  }
);

function setParams(config) {
  let method = config.method.toLocaleUpperCase();
  if (method === 'GET') {
    config.params = config.data;
    delete config.data;
  }
}

// 响应拦截
axiosInstance.interceptors.response.use(
  (config) => {
    // console.log('响应拦截：', config);
    return config.data;
  },
  (error) => {
    let { message } = error;
    let { method } = error.config;

    if (message.includes('timeout')) {
      console.error(`${error.config.url}请求超时`);
    } else if (message.includes('code 400')) {
      console.error(`method:${method} 语法错误`);
    } else if (message.includes('code 403')) {
      console.error(`请求资源被服务器拒绝`);
    } else if (message.includes('code 404')) {
      console.error(`${error.config.url}请求地址错误`);
    } else if (message.includes('code 500')) {
      console.error(`服务器错误`);
    } else if (message.includes('code 503')) {
      console.error(`服务器停机维护`);
    }
    // console.log('响应错误', error.config);
    return error;
  }
);

export default axiosInstance;
