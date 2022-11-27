import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import Card from "../components/Card";
import Container from "../components/Container";
import Header from "../components/Header";
import Navbar from "../components/Navbar";

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
      <>
        <Container>
          <Navbar
            backdropBlur="backdrop-blur-sm"
            bgColor="bg-gradient-to-r from-sky-100 via-purple-100/60 to-orange-100/90"
            positionNavbar="sticky"
            cat1={"Thriller"}
            cat2={"Horror"}
            cat3={"Comedy"}
          />
          <Header />
          <div className="pl-10 "></div>
          <div className=" grid 2xl:grid-cols-6 bg-opa stic lg:grid-cols-4 gap-5 p-5 md:grid-cols-3 sm:grid-cols-2 z-0 backdrop-blur-2xl ">
            {movie.map((movie) => {
              return (
                <Card
                  key={movie.id}
                  image={movie.poster_path}
                  title={movie.title}
                  date={movie.release_date}
                  onClick={() => getDetails(movie.id)}
                />
              );
            })}
          </div>
        </Container>
      </>
    );
  }
};

export default Home;
