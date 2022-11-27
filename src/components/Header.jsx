import { HiStar } from "react-icons/hi";
import axios from "axios";
import React, { useState, useEffect } from "react";

const Header = () => {
  const [movie, setMovie] = useState([]);
  const moviesRandom = movie[Math.floor(Math.random() * movie.length)];

  //   console.log(moviesRandom);
  //   console.log(movie.length);

  const get_upcoming = `https://api.themoviedb.org/3/movie/upcoming?api_key=${
    import.meta.env.VITE_API_KEY
  }&language=en-US&page=2`;

  useEffect(() => {
    getUpcoming();
  }, []);

  function getUpcoming() {
    axios
      .get(get_upcoming)
      .then((response) => {
        setMovie(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  const overviewStr = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + "...";
    } else return str;
  };

  return (
    <div
      className="carousel w-full bg-cover
       h-[90vh]"
      style={{
        backgroundImage: `url(${`https://image.tmdb.org/t/p/original${moviesRandom?.backdrop_path})`}`,
      }}
    >
      <div className="carousel w-full bg-cover bg-gradient-to-t from-slate-900 via-slate-900/30  to-transparent">
        <div className="grid content-end p-5 w-[90vw] h-[80vh] pt-40  m-auto">
          <h1 className="text-2xl md:text-4xl lg:text-6xl  font-semibold mb-3 text-white/90 ">
            {moviesRandom?.title}
          </h1>
          <div className=" text-white flex flex-wrap">
            <HiStar size={25} className="text-yellow-400 mx-1" />
            <span className="font-extralight ">
              {moviesRandom?.vote_average}
            </span>
            <span className="ml-4 font-extralight ">2h 30m</span>
            <span className="ml-4 font-extralight"></span>
            <span className="ml-4 font-extralight">
              {moviesRandom?.release_date}
            </span>
          </div>
          <p className="w-3/4 pt-2 text-white">{moviesRandom?.overview}</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
