import Header from "@components/header/header.connect";
import FilmCardItem from "@components/film-list/components/film-card-item";
import {Footer} from "@components/footer/footer";
import {TFilm} from "../../constants/types";
import * as React from "react";

interface IMyList {
  favoriteFilms: Array<TFilm>
}

export default class MyList extends React.Component<IMyList> {
  render() {

    return (
      <div className="user-page">
        <Header isUserPage={true}>
          <h1 className="page-title user-page__title">My list</h1>
        </Header>

        <section className="catalog">
          <h2 className="catalog__title visually-hidden">CatalogNav</h2>

          <div className="catalog__movies-list">
            {this.props.favoriteFilms.length === 0 &&
              <div className="mx-auto">
                Список фильмов пуст :(
              </div>
            }
            {this.props.favoriteFilms.map((film, index) => {
              return <FilmCardItem key={film.id} data={film} />;
            })}
          </div>
        </section>
        <Footer/>
      </div>
    );
  }
}