import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";

import Card from "../components/Card";
import Container from "../components/Container";
import Header from "../components/Header";
import Navbar from "../components/Navbar";

import { addFav } from "../utils/redux/reducer/favSlice";

import { BsBookmark } from "react-icons/bs";

const urlNowPlaying = `https://api.themoviedb.org/3/movie/now_playing?api_key=${
  import.meta.env.VITE_API_KEY
}&page=1`;

const Home = () => {
  const [movie, setMovie] = useState([]);
  const dispatch = useDispatch();
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

  // =====================
  // === ADD FAVORITES ===
  // =====================
  const addToFav = (movie) => {
    dispatch(addFav(movie));
  };

  // ==================
  // === GET DETAIL ===
  // ==================
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
            backdropBlur="backdrop-blur-md bg-slate-400/80"
            positionNavbar="fixed"
            cat1={"Thriller"}
            cat2={"Horror"}
            cat3={"Comedy"}
          />
          <Header />

          {/* CARD */}
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
                  actionCard={
                    <BsBookmark
                      className={`cursor-pointer hover:scale-110 `}
                      onClick={() => addToFav(movie)}
                    ></BsBookmark>
                  }
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
