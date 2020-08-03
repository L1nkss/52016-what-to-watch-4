export default class Adapter {
  static convertData(data) {
    return {
      id: data.id,
      email: data.email,
      name: data.name,
      avatarUrl: data.avatar_url
    };
  }
}
