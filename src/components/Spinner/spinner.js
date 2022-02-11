import React from "react";
import spinner from "../assets/images/spinner.gif";

const Spinner = () => {
  return (
    <img
      src={spinner}
      style={{
        width: "200px",
        margin: "auto",
        display: "flex",
        alignItems: "center",
      }}
      alt="Loading"
    />
  );
};

export default Spinner;
