import axios from 'axios';
import history from "./utils/history";
import {RoutePathes} from "./utils/constans";

const Error = {
  UNAUTHORIZED: 401,
  BAD_REQUEST: 400,
  NOT_FOUND: 404
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
      // Необходимо, чтобы цепочка промисов прервались и в Operation не выполнился промис success
      throw error;
    }
    if (response.status === Error.BAD_REQUEST) {
      throw error;
    }

    if (response.status === Error.NOT_FOUND) {
      history.push(RoutePathes.NOT_FOUND);
      throw error;
    }
  };
  api.interceptors.response.use(onSuccess, onFail);
  return api;
};
