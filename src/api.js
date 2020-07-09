import axios from 'axios';

const Error = {
  UNAUTHORIZED: 401
};

export const createAPI = (onUnauthorized) => {
  const api = axios.create({
    baseURL: `https://htmlacademy-react-3.appspot.com/wtw`,
    timeout: 5000,
    withCredentials: true
  });
  const onSuccess = (response) => {
    return response;
  };
  const onFail = (error) => {
    const {response} = error;
    if (response.status === Error.UNAUTHORIZED) {
      onUnauthorized();
    }
  };
  api.interceptors.response.use(onSuccess, onFail);
  return api;
};
