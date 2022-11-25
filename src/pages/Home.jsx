import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import Navbar from "../components/Navbar";
import Container from "../components/Container";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const urlNowPlaying = `https://api.themoviedb.org/3/movie/now_playing?api_key=${
  import.meta.env.VITE_API_KEY
}&page=1`;

const Home = () => {
  const [movie, setMovie] = useState([]);
  const navigate = useNavigate();

  const getNowPlaying = () => {
    axios
      .get(urlNowPlaying)
      .then((response) => {
        const results = response.data.results;
        setMovie(results);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getDetails = (movie) => {
    navigate("./Detail", {
      state: {
        movie: movie,
      },
    });
  };

  useEffect(() => {
    getNowPlaying();
  }, []);

  {
    return (
      <Container>
        <Navbar
          favorites={() => navigate("./Favorites")}
          home={() => navigate("./")}
        ></Navbar>
        <div className="pl-10 "></div>
        <div className=" grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 z-0 backdrop-blur-2xl ">
          {movie.map((movie) => {
            return (
              <Card
                key={movie.id}
                image={movie.backdrop_path}
                title={movie.title}
                date={movie.release_date}
                onClick={() => getDetails(movie)}
              />
            );
          })}
        </div>
      </Container>
    );
  }
};

export default Home;
