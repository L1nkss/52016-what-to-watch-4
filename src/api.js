import axios from 'axios';

export const createAPI = () => {
  const api = axios.create({
    baseURL: `https://htmlacademy-react-3.appspot.com/wtw`,
    timeout: 5000,
    withCredentials: true
  });
  const onSuccess = (response) => {
    return response;
  };
  const onFail = () => {

  };
  api.interceptors.response.use(onSuccess, onFail);
  return api;
};
