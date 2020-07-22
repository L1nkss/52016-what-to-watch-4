import axios from 'axios';
import {baseUrl} from "./constants/constants";

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
  getReviews(id) {
    return this.api.get(`/comments/${id}`);
  }
  getLogin() {
    return this.api.get(`/login`);
  }
  getFavorite() {
    return this.api.get(`/favorite`);
  }
  postLogin(data) {
    return this.api.post(`/login`, {
      email: data.login,
      password: data.password
    });
  }
  postFavoriteFilm(id, status) {
    return this.api.post(`/favorite/${id}/${status}`);
  }
  postReview(id, data) {
    return this.api.post(`/comments/${id}`, {
      rating: data.get(`rating`),
      comment: data.get(`review-text`)
    });
  }
}
