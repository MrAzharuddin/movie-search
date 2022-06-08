import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Card({ poster, title, type, year, imdbID }) {
  return (
    <div className="w-[30vw] bg-gray-200 m-4 flex flex-col justify-center items-center py-4 rounded-lg">
      <img width="120" src={poster} alt="poster" /> <br />
      <h1>Movie Name : {title}</h1>
      <p>Year: {year}</p>
      <p>Genre: {type}</p>
      <Link to={`/${imdbID}`}>Click here for more Info</Link>
    </div>
  );
}

function Init() {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <h1 className="text-4xl font-bold">Search a movie name to display!</h1>
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
    console.log(searchData);
  }, [searchData]);
  // console.log(data);
  return (
    <div className="flex flex-wrap justify-center items-center">
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
