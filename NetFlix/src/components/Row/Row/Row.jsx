import React, { useEffect, useState, useRef } from "react";
import Container from "react-bootstrap/esm/Container";
import trailer from "movie-trailer";
import YouTube from "react-youtube";
import axios from "../../../utils/axios";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import "./row.css";
const Row = ({ title, fetchUrl, islargeRow }) => {
  const [movies, setMovies] = useState([]);
  const [urltrailer, setTrailer] = useState("");

  const BaseUrl = `https://image.tmdb.org/t/p/original`;
  useEffect(() => {
    (async () => {
      try {
        console.log(fetchUrl);
        const requist = await axios.get(fetchUrl);
        console.log(requist);
        setMovies(requist.data.results);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [fetchUrl]);

  let handleClick = (singlemovie) => {
    if (urltrailer) {
      setTrailer("");
    } else {
      trailer(
        singlemovie?.title || singlemovie?.name || singlemovie?.original_name,
      ).then((url) => {
        const urlparam = new URLSearchParams(new URL(url).search);
        // to get video id
        console.log(urlparam.get("v"));
        setTrailer(urlparam.get("v"));
      });
    }
  };

  const opts = {
    padding: "40px",
    height: "390px",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };
  const rowRef = useRef(null);

  const scrollGallery = (direction) => {
    if (rowRef.current) {
      const scrollAmount = 500;
      if (direction === "left") {
        rowRef.current.scrollLeft -= scrollAmount;
      } else {
        rowRef.current.scrollLeft += scrollAmount;
      }
    }
  };

  const isFirstRow = title === "NETFLIX ORIGINALS";

  return (
    <>
      <div className="row">
        <h1>{title}</h1>
        <div className="poster_arrow arrows">
          <div
            className={`left_arrow arrow ${isFirstRow ? "none" : "display"}`}
            onClick={() => scrollGallery("left")}
          >
            <KeyboardArrowLeftIcon />
          </div>

          <div className="row_posters" ref={rowRef}>
            <div
              id="photoGallery"
              className={`${isFirstRow ? " marquee-container" : ""}`}
            >
              <div
                className={`${isFirstRow ? "marquee-track" : "marquee-track-paused"}`}
              >
                {movies?.map((singlemovie, index) => (
                  <img
                    key={index}
                    src={`${BaseUrl}${
                      islargeRow ?
                        singlemovie.poster_path
                      : singlemovie.backdrop_path
                    }`}
                    className={`row_poster ${islargeRow && "row_posterLarge"}`}
                    alt={singlemovie.name}
                    onClick={() => handleClick(singlemovie)}
                  />
                ))}
                {movies?.map((singlemovie, index) => (
                  <img
                    key={index}
                    src={`${BaseUrl}${
                      islargeRow ?
                        singlemovie.poster_path
                      : singlemovie.backdrop_path
                    }`}
                    className={`row_poster ${islargeRow && "row_posterLarge"}`}
                    alt={singlemovie.name}
                    onClick={() => handleClick(singlemovie)}
                  />
                ))}
              </div>
            </div>
          </div>

          <div
            onClick={() => scrollGallery("right")}
            className={`arrow ${isFirstRow ? "none" : "display"}`}
          >
            <KeyboardArrowRightIcon />
          </div>
        </div>
      </div>
      <div>
        {/* // && means  if */}
        {urltrailer && <YouTube videoId={urltrailer} opts={opts} />}
      </div>
    </>
  );
};

export default Row;
