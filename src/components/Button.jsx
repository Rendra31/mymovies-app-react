import React from "react";

const Button = ({ genreName, id }) => {
  return (
    <div
      className="ml-2 px-2 py-1 text-xs font-thin bg-blue-600/75 rounded-xl"
      key={id}
    >
      {genreName}
    </div>
  );
};

export default Button;
