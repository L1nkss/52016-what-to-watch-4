import * as React from "react";

type TFilm = {
  backgroundColor?: string,
  backgroundImage?:string,
  description?: string,
  director?: string,
  genre?: string,
  id: number,
  isFavorite?: boolean,
  name?: string,
  posterImage?: string,
  previewImage?: string,
  previewVideoLink?: string,
  scoresCount?: number,
  rating?: number,
  released?: number,
  runTime?: number,
  starring?: Array<string>,
  videoLink?: string
}

type TUserAuthStatus = `AUTH` | `NO_AUTH`;

interface RouteProps {
  exact?: boolean,
  path?: string,
  render?: ((props: any) => React.ReactNode),
  component?: React.ComponentType<any>
}

type TUserInfo = {
  id: number,
  email: string,
  name: string,
  avatarUrl: string
}

export {TFilm, TUserAuthStatus, TUserInfo, RouteProps};
