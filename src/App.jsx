import { Container } from "postcss";
import React, { Component } from "react";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
class App extends Component {
  state = {
    value: 0,
    data: [],
  };
  getMovies() {
    let movies = [
      {
        id: 1,
        title: "Freedom",
        poster:
          "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/action-movie-poster-template-design-0f5fff6262fdefb855e3a9a3f0fdd361_screen.jpg?ts=1636996054",
      },
      {
        id: 2,
        title: "Avengers End Game",
        poster:
          "https://s1.bukalapak.com/img/68286857232/large/Poster_Film___Avengers_Endgame___Marvel_Studios___Movie_Post.jpg",
      },
      {
        id: 3,
        title: "Archer",
        poster:
          "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/adventure-movie-poster-template-design-7b13ea2ab6f64c1ec9e1bb473f345547_screen.jpg?ts=1636999411",
      },
      {
        id: 4,
        title: "After",
        poster:
          "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/movie-poster-template-design-21a1c803fe4ff4b858de24f5c91ec57f_screen.jpg?ts=1636996180",
      },
      {
        id: 5,
        title: "Astronout",
        poster:
          "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/space-movie-poster-design-template-18133e937d93002c68b4649ea234d75f_screen.jpg?ts=1636996611",
      },
      {
        id: 6,
        title: "O.R.I.G.I.N",
        poster:
          "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/movie-poster-template-design-71650f9b1c11091f5bcd637d4a18d9a7_screen.jpg?ts=1636996858",
      },
      {
        id: 7,
        title: "The War Lord",
        poster:
          "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/war-movie-poster-design-template-511b0e13d82eb7bfc1b991d6c04364a5.jpg?ts=1637035308",
      },
      {
        id: 8,
        title: "Lost In Space",
        poster:
          "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/space-movie-poster-design-template-5b8db67f1797f3507059f9e18f8cf607.jpg?ts=1636997284",
      },
    ];
    this.setState({ data: movies });
  }
  componentDidMount() {
    this.getMovies();
  }
  render() {
    const result = this.state.data;
    console.log(result);
    return (
      <div className="bg-slate-100 h-auto">
        <Navbar></Navbar>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {result.map((item) => {
            return <Card image={item.poster} title={item.title} />;
          })}
        </div>
      </div>
    );
  }
}

export default App;
