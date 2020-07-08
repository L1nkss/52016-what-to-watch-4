export default class Adapter {
  static convertData(data) {
    return data.map(this.convertItem);
  }
  static convertItem(item) {
    return {
      backgroundColor: item.background_color,
      backgroundImage: item.background_image,
      description: item.description,
      director: item.director,
      genre: item.director,
      id: item.id,
      isFavorite: item.is_favorite,
      name: item.name,
      posterImage: item.poster_image,
      previewImage: item.preview_image,
      previewVideoLink: item.preview_video_link,
      rating: item.rating,
      released: item.released,
      runTime: item.run_time,
      starring: item.starring,
      videoLink: item.video_link
    };
  }
}
