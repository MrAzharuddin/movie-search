import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Card({ poster, title, type, year, imdbID }) {
  return (
    <div className="h-auto bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-20 bg-gray-800 md:my-8 md:mx-12 my-6 flex flex-col justify-center rounded-lg font-Caveat">
      <img
        src={poster}
        alt="poster"
        className="max-w-full h-auto rounded-t-md aspect-[4/5] max-h-[375px]"
      />
      <div className="max-w-full p-6 text-center space-y-2 text-xl font-semibold">
        <h1 className="capitalize text-2xl font-Caveat font-black">{title}</h1>
        <div className="flex justify-between items-center space-y-2 pb-2">
          <div className="text-xl">
            <p className="text-xs text-gray-600 uppercase">Release Year</p>
            <p className="text-lg uppercase">{year}</p>
          </div>
          <div>
            <p className="text-xs text-gray-600 uppercase">Genre</p>
            <p className="text-lg uppercase">{type}</p>
          </div>
        </div>
        <Link to={`/${imdbID}`}>
          <a
            href="#_"
            class="relative inline-block px-4 py-2 font-medium group"
          >
            <span class="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
            <span class="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
            <span class="relative text-black group-hover:text-white">
              Find More
            </span>
          </a>
        </Link>
      </div>
    </div>
  );
}

function Init() {
  return (
    <div
      className="w-full h-screen flex justify-center items-center relative bg-cover bg-center "
      style={{ backgroundImage: "url(/assets/images/moviebg.jpg)" }}
    >
      {/* <img src="/assets/images/moviebg.jpg" alt="moviebg" className="absolute -z-4 inset-0 max-h-[93vh] min-w-full" /> */}
      <h1 className="text-6xl font-bold font-Caveat text-white relative capitalize">
        Search a movie name to display!
      </h1>
    </div>
  );
}

export default function Home({ searchData }) {
  const [data, setData] = useState([]);
  useEffect(() => {
    if (searchData) {
      axios
        .get(`https://www.omdbapi.com/?s=${searchData}&apikey=aa5e432d`)
        .then((res) => {
          setData(res.data.Search);
        });
    }
    // setData(searchData);
    // console.log(searchData);
  }, [searchData]);
  console.log(data);
  return (
    <div className="flex flex-wrap justify-center items-center bg-black bg-opacity-0">
      {searchData ? (
        data?.map((val) => {
          return (
            <div key={val?.imdbID}>
              <Card
                title={val?.Title}
                imdbID={val?.imdbID}
                poster={val?.Poster}
                type={val?.Type}
                year={val?.Year}
              />
            </div>
          );
        })
      ) : (
        <Init />
      )}
    </div>
  );
}
