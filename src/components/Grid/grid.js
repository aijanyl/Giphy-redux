import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadGifs } from "../../store/actions/gifActions";
import Spinner from "../Spinner/spinner";
import Gifs from "../Gifs";

const Grid = () => {
  const dispatch = useDispatch();
  const gifs = useSelector((state) => state.gif.gifs);
  const isLoading = useSelector((state) => state.gif.isLoading);

  useEffect(() => {
    dispatch(loadGifs());
  }, [dispatch]);

  return isLoading ? (
    <Spinner />
  ) : (
    <section className="cards">
      {gifs.map((gif) => (
        <Gifs key={gif.images.downsized_still.url} gif={gif} />
      ))}
    </section>
  );
};

export default Grid;
