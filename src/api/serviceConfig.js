let serviceConfgi = {
  base: '/api',
};

if (import.meta.env.PROD && import.meta.env.VITE_ENV === 'PROD') {
  serviceConfgi.base = '';
}

export default serviceConfgi;
