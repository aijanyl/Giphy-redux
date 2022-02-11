import React from "react";

const Gifs = ({ gif }) => {
  return (
    <div className="gif">
      <img
        src={gif.images.downsized_medium.url}
        alt=""
        className="img-thumbnail"
      />
    </div>
  );
};

export default Gifs;
