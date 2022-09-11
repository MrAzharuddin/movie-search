import { React, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function Movie() {
  const [movieInfo, setMovieInfo] = useState({});
  let params = useParams();
  useEffect(() => {
    axios
      .get(`https://www.omdbapi.com/?i=${params.id}&apikey=aa5e432d`)
      .then((res) => {
        setMovieInfo(res.data);
      });
  }, [params.id]);
  console.log(movieInfo);
  return (
    <>
      <div className="">
        <div className="md:px-20 py-8">
          {/* Movie Information */}
          <div className="flex md:flex-nowrap flex-wrap md:justify-start justify-center md:space-x-6 items-center md:space-y-0 space-y-6">
            <div className="px-6">
              <img
                src={movieInfo.Poster}
                alt={movieInfo.Title}
                className="rounded-3xl"
              />
            </div>
            <div className="w-full flex flex-col space-y-3 px-6">
              <div className="flex justify-between w-full ">
                <h1 className="text-2xl font-semibold">
                  {movieInfo.Title}{" "}
                  <span className="text-xs text-gray-500">
                    ({movieInfo.Year})
                  </span>
                </h1>
              </div>
              <div className="">
                <hr />
              </div>
              <div className="flex md:flex-nowrap flex-wrap justify-between items-center space-x-6 w-full">
                <div className="flex md:space-x-6 space-x-4 md:justify-start items-center">
                  {movieInfo?.Genre?.split(",")?.map((val) => {
                    return (
                      <div className="py-2 flex justify-between" key={val}>
                        <li className="uppercase font-semibold text-sm list-none">
                          {val}
                        </li>
                      </div>
                    );
                  })}
                </div>
                <p className="text-base font-medium text-center">
                  &#11088;{" "}
                  <span className="text-blue-500 font-bold">
                    {movieInfo.imdbRating}
                  </span>{" "}
                  / 10
                </p>
              </div>
              <div className="">
                <hr />
              </div>
              <div>
                <p className="text-center">{movieInfo.Plot}</p>
              </div>
              <div>
                <h1 className="text-xl font-semibold">Actors</h1>
                <div className="flex justify-between items-center py-2">
                  {movieInfo?.Actors?.split(",")?.map((val) => (
                    <h1 key={val} className="text-md font-light">
                      {val}
                    </h1>
                  ))}
                </div>
              </div>
              <div>
                <h1 className="text-xl font-semibold">IMDB Info</h1>
                <div className="flex justify-between items-center py-2 text-center">
                  <div>
                    <p className="text-sm text-gray-500 font-medium">IMDB ID</p>
                    <p>{movieInfo.imdbID}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium">
                      IMDB RATINGS
                    </p>
                    <p>{movieInfo.imdbRating}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium">
                      IMDB VOTINGS
                    </p>
                    <p>{movieInfo.imdbVotes}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="px-6 my-4">
            <hr />
          </div>

          {/* Movie details */}

          <div className="px-6 py-4">
            <h1 className="text-xl font-semibold pb-4">Movie Details</h1>
            <div className="lg:w-4/5 flex flex-col justify-center space-y-2">
              <div className="flex">
                <p className="text-sm text-gray-500 font-medium w-1/3">
                  Rating
                </p>
                <p className="text-sm text-left">{movieInfo.Rated}</p>
              </div>
              <div className="flex ">
                <p className="text-sm text-gray-500 font-medium w-1/3">
                  Directed By
                </p>
                <p className="text-sm">{movieInfo.Director}</p>
              </div>
              <div className="flex ">
                <p className="text-sm text-gray-500 font-medium w-1/3">
                  Written By
                </p>
                <p className="text-sm flex-1">{movieInfo.Writer}</p>
              </div>
              <div className="flex ">
                <p className="text-sm text-gray-500 font-medium w-1/3">
                  Released Date
                </p>
                <p className="text-sm text-left">{movieInfo.Released}</p>
              </div>
              <div className="flex ">
                <p className="text-sm text-gray-500 font-medium w-1/3">
                  Box Office
                </p>
                <p className="text-sm text-left">{movieInfo.BoxOffice}</p>
              </div>
              <div className="flex ">
                <p className="text-sm text-gray-500 font-medium w-1/3">
                  Run Time
                </p>
                <p className="text-sm text-left">{movieInfo.Runtime}</p>
              </div>
              <div className="flex ">
                <p className="text-sm text-gray-500 font-medium w-1/3">
                  Production
                </p>
                <p className="text-sm text-left">{movieInfo.Production}</p>
              </div>
              <div className="flex  ">
                <p className="text-sm text-gray-500 font-medium w-1/3">
                  Language
                </p>
                <p className="text-sm text-left">{movieInfo.Language}</p>
              </div>
              <div className="flex ">
                <p className="text-sm text-gray-500 font-medium w-1/3">
                  Content Type
                </p>
                <p className="text-sm text-left capitalize">{movieInfo.Type}</p>
              </div>
            </div>
          </div>

          {/* Ratings */}

          <div className="p-6">
            <h1 className="text-xl font-semibold py-4">Other Ratings</h1>
            <div className="flex justify-between w-full text-center flex-wrap">
              {movieInfo?.Ratings?.map((value) => {
                return (
                  <div className="flex flex-col space-y-2 justify-between items-center ">
                    <p className="text-sm text-gray-500 font-medium">
                      {value.Source}
                    </p>
                    <p>{value.Value}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
