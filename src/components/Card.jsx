import React, { Component } from "react";

class Card extends Component {
  render() {
    const { image, title, description, text } = this.props;

    return (
      <div className="card w-64 h-max bg-white shadow-xl m-5">
        <figure>
          <img src={image} />
        </figure>
        <h2 className=" text-center text-2xl p-2 text-slate-700 ">{title}</h2>
        <div className="flex justify-evenly pb-2 text-white">
          <button className="  bg-blue-500 border-none w-24 h-11">
            Favorite
          </button>
          <button className=" bg-blue-500 border-none w-24 h-11">
            Details
          </button>
        </div>
      </div>
    );
  }
}

export default Card;
