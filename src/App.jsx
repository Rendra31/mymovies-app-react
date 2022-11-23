import React, { Component } from "react";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import api from "./services/api";
import Container from "./components/Container";
class App extends Component {
  state = {
    data: [],
  };

  async getMovies() {
    await api
      .now_playing()
      .then((res) => {
        this.setState({ data: res.data.results });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  componentDidMount() {
    this.getMovies();
  }
  render() {
    const res = this.state.data;

    console.log(res);
    return (
      <Container>
        <Navbar></Navbar>
        <div className=" grid grid-cols-4 z-0 backdrop-blur-2xl ">
          {res.map((movie) => {
            return (
              <Card
                image={movie.backdrop_path}
                title={movie.title}
                date={movie.release_date}
              />
            );
          })}
        </div>
      </Container>
    );
  }
}

export default App;

// ====================
// ==== DATA DUMMY ====
// ====================

// getMovies() {
//   let movies = [
//     {
//       id: 1,
//       title: "Freedom",
//       poster:
//         "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/action-movie-poster-template-design-0f5fff6262fdefb855e3a9a3f0fdd361_screen.jpg?ts=1636996054",
//     },
//     {
//       id: 2,
//       title: "Avengers End Game",
//       poster:
//         "https://s1.bukalapak.com/img/68286857232/large/Poster_Film___Avengers_Endgame___Marvel_Studios___Movie_Post.jpg",
//     },
//     {
//       id: 3,
//       title: "Archer",
//       poster:
//         "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/adventure-movie-poster-template-design-7b13ea2ab6f64c1ec9e1bb473f345547_screen.jpg?ts=1636999411",
//     },
//     {
//       id: 4,
//       title: "After",
//       poster:
//         "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/movie-poster-template-design-21a1c803fe4ff4b858de24f5c91ec57f_screen.jpg?ts=1636996180",
//     },
//     {
//       id: 5,
//       title: "Astronout",
//       poster:
//         "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/space-movie-poster-design-template-18133e937d93002c68b4649ea234d75f_screen.jpg?ts=1636996611",
//     },
//     {
//       id: 6,
//       title: "O.R.I.G.I.N",
//       poster:
//         "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/movie-poster-template-design-71650f9b1c11091f5bcd637d4a18d9a7_screen.jpg?ts=1636996858",
//     },
//     {
//       id: 7,
//       title: "The War Lord",
//       poster:
//         "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/war-movie-poster-design-template-511b0e13d82eb7bfc1b991d6c04364a5.jpg?ts=1637035308",
//     },
//     {
//       id: 8,
//       title: "Lost In Space",
//       poster:
//         "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/space-movie-poster-design-template-5b8db67f1797f3507059f9e18f8cf607.jpg?ts=1636997284",
//     },
//   ];
//   this.setState({ data: movies });
// }
