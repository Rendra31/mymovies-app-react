import React, { Component } from "react";
import { BsBookmark } from "react-icons/bs";

class Card extends Component {
  render() {
    const { image, title, date } = this.props;

    return (
      <div className="flex flex-col  md:w-46 lg:h-auto lg:w-64 rounded-lg m-auto my-5 z-10 backdrop-blur-2xl shadow-xl">
        <div className="flex justify-center items-center px-2 pt-2 cursor-pointer ">
          <img
            className="h-[170px]  object-cover md:h-[12rem] lg:h-[320px] w-full rounded-lg img-card"
            src={`https://image.tmdb.org/t/p/w500${image}`}
            alt={title}
          />
        </div>
        <div className="flex justify-between items-center px-4 mt-3  dark:text-abu-100 ">
          <div>
            <h5 className="mb-2 text-xs md:text-sm font-semibold cursor-pointer">
              {title}
            </h5>
            <p className="font-light text-[12px] md:text-xs pb-2">{date}</p>
          </div>

          <BsBookmark className="cursor-pointer "></BsBookmark>
        </div>
      </div>
    );
  }
}

export default Card;
