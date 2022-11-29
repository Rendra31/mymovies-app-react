import React from "react";
import Navbar from "../components/Navbar";
import Container from "../components/Container";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import MappingGenre from "../components/MappingGenre";

import { AiOutlinePlayCircle } from "react-icons/ai";
import { BsBookmark } from "react-icons/bs";
import { FiShare2 } from "react-icons/fi";

const Detail = () => {
  const location = useLocation();
  const [detail, setDetail] = useState([]);
  // const navigate = useNavigate();
  const movie_id = location?.state?.movie;
  const get_detail = `https://api.themoviedb.org/3/movie/${movie_id}?api_key=9e2dd22911fdca10fd73f04378ba1509&language=en-US`;
  // console.log(detail);
  const getDetails = () => {
    axios
      .get(get_detail)
      .then((response) => {
        const results = response.data;
        setDetail(results);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  // =====================================
  // SLICE 2 LAST NUMBER FROM VOTE_AVARAGE
  // =====================================
  const rateNumber = detail.vote_average + "";
  // console.log(rateNumber.length);
  const rate =
    rateNumber.length > 4 ? rateNumber.slice(0, -2) : rateNumber.slice(0, -1);

  // ================================
  // CONVERT RUNTIME TO HOUR & MINUTE
  // ================================
  const convertToHour = +Math.floor(detail.runtime / 60) + "";
  const convertToMinute = detail.runtime - convertToHour * 60 + "";
  const hours = `${convertToHour}h `;
  const minutes = `${convertToMinute}min`;

  // ===================
  // SLICE TEXT OVERVIEW
  // ===================
  const overviewStr = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + "...";
    } else return str;
  };

  // ========
  // TEST API
  // ========
  const genreFilm = detail.genres;
  genreFilm?.map((genre) => genre.name);

  useEffect(() => {
    getDetails();
  }, []);

  {
    return (
      <Container>
        <Navbar
          backropBlur="bg-black"
          positionNavbar="fixed"
          textColor="text-white "
        />
        <div
          className=" w-full h-[100vh] bg-cover  "
          style={{
            backgroundImage: `url(${`https://image.tmdb.org/t/p/original${detail.backdrop_path})`}`,
          }}
        >
          <div className=" grid content-end w-full h-screen bg-gradient-to-t from-black/80  to-transparent ">
            {/* LEFT CARD */}

            <div className=" flex w-full h-[50vh]  text-white">
              <div className=" w-[100vh] flex">
                <img
                  src={`https://image.tmdb.org/t/p/original${detail.poster_path}`}
                  alt=""
                  className="rounded-xl top-40 left-10 fixed w-60 shadow-lg  shadow-white/10"
                />
                <div className="  text-white flex flex-wrap  content-center m-auto items-center mb-8  ">
                  <div
                    className="radial-progress text-amber-500 mr-2 shadow-2xl shadow-white/70 "
                    style={{
                      "--value": `${detail.vote_average * 10} `,
                      "--size": "3rem",
                    }}
                  >
                    <p className="text-xl font-bold">{rate}</p>
                  </div>
                  <div className="flex flex-col font-sans">
                    <p className="text-md font-bold">
                      {Math.floor(detail.popularity)}
                      <span className="ml-1 font-extralight text-sm">
                        ratings
                      </span>
                    </p>
                    <p className="text-md font-bold ">
                      {detail.vote_count}
                      <span className="ml-1 font-extralight text-sm">
                        review
                      </span>
                    </p>
                  </div>
                </div>
              </div>

              {/* TITLE  */}

              <div className=" w-full font-sans flex flex-col">
                <h1 className="text-4xl font-bold ">{detail.title}</h1>
                <p>
                  <span className="font-bold pr-3">
                    ({detail.release_date})
                  </span>
                  {hours}
                  {minutes}
                </p>
                <div className="flex-row flex my-2 justify-start pt-2 ">
                  <button className="flex btn btn-primary rounded-3xl mr-2 ">
                    watch now
                    <AiOutlinePlayCircle className="p-1" size={30} />
                  </button>
                  <div className="border-2 w-10 h-10 self-center mr-2 rounded-full flex justify-center">
                    <BsBookmark className="self-center content-center" />
                  </div>
                  <div className="border-2 w-10 h-10 self-center rounded-full flex justify-center">
                    <FiShare2 className="self-center content-center" />
                  </div>
                </div>

                <p className="pt-5 pr-5">{overviewStr(detail.overview, 275)}</p>
              </div>

              {/* ===DETAILS === */}

              <div className=" pt-5 rounded-xl backdrop-blur-sm bg-slate-500/10 px-2 m-3 w-1/4 flex-none">
                <p className="text-2xl font-bold font-sans ">Details</p>
                <div className="text-sm">
                  <div className="flex flex-wrap pt-3  border-b-2 pb-1  border-dashed content-center text-center">
                    Genres:
                    {genreFilm?.map((genre) => {
                      return (
                        <MappingGenre genreName={genre.name} key={genre.id} />
                      );
                    })}
                  </div>
                  <p className="pt-3 border-b-2 pb-1  border-dashed">
                    Runtime:{" "}
                    <span className="text-xs">
                      {hours} {minutes}
                    </span>
                  </p>
                  <p className="pt-3 border-b-2 pb-1  border-dashed">
                    Original Title:{" "}
                    <span className="text-xs">{detail.original_title}</span>
                  </p>
                  <p className="pt-3 border-b-2 pb-1  border-dashed">
                    Release Date:{" "}
                    <span className="text-xs">{detail.release_date}</span>
                  </p>
                  <p className="pt-3 border-b-2 pb-1  border-dashed">
                    Tagline: <span className="text-xs">{detail.tagline}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    );
  }
};

export default Detail;
