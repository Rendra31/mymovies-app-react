import React from "react";
import Navbar from "../components/Navbar";
import Container from "../components/Container";
import { useLocation, useNavigate } from "react-router-dom";
import Card from "../components/Card";

const Detail = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const movie = location?.state?.movie;
  // console.log(movie);

  {
    return (
      <Container>
        <Navbar></Navbar>
        <Card image={movie.poster_path} />
      </Container>
    );
  }
};

export default Detail;
