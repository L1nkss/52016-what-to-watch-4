import axios from 'axios';
import {baseUrl} from "@utils/constans";

export class Api {
  constructor(onSuccess, onFail) {
    this.api = axios.create({
      baseURL: `${baseUrl}/wtw`,
      timeout: 5000,
      withCredentials: true
    });
    this.api.interceptors.response.use(onSuccess, onFail);
  }
  getFilms() {
    return this.api.get(`/films`);
  }
  getPromoFilm() {
    return this.api.get(`/films/promo`);
  }
  postReview(id, data) {
    return this.api.post(`/comments/${id}`, {
      rating: data.get(`rating`),
      comment: data.get(`review-text`)
    });
  }
  getReviews(id) {
    return this.api.get(`/comments/${id}`);
  }
  getLogin() {
    return this.api.get(`/login`);
  }
  postLogin(data) {
    return this.api.post(`/login`, {
      email: data.login,
      password: data.password
    });
  }
}
