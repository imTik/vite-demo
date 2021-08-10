import HTTP from './http';

export function test(params) {
  return HTTP.get('/getUserInfo');
}
