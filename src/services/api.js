import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/",
});

export default {
  now_playing: () =>
    instance({
      method: `GET`,
      url: `3/movie/now_playing?api_key=9e2dd22911fdca10fd73f04378ba1509&language=en-US&page=1`,
    }),
};
