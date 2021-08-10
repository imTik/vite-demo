import request from './request';

const HTTP = {
  post: function (url, data, config = {}) {
    return request({
      method: 'POST',
      url,
      data,
      ...config,
    });
  },

  get: function (url, data, config = {}) {
    return request({
      method: 'GET',
      url,
      data,
      ...config,
    });
  },
};

export default HTTP;
