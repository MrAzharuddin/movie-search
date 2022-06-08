import { React, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

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
      <div>
        <div>
          <div>
            <h1 className="font-5xl ">{movieInfo.Title}</h1>
            <p>
              {movieInfo.Type} | {movieInfo.Year} | {movieInfo.Rated}
            </p>
          </div>
          <div>
            <div>
              <h1>IMDB RATING</h1>
              <p>{movieInfo.imdbRating}</p>
            </div>
            <div>
              <h1>IMDB VOTES</h1>
              <p>{movieInfo.imdbVotes}</p>
            </div>
            <div>
              <h1>META SCORE</h1>
              <p>{movieInfo.Metascore}</p>
            </div>
          </div>
        </div>
        <div>
          <img src={movieInfo.Poster} alt={movieInfo.Title} />
        </div>
        <div>
          <div className='flex space-x-2'>
            {
              movieInfo?.Genre?.split(",")?.map((val)=>{
                return (
                  <div className='border-[1px] border-white px-4 py-1' key={val}>
                    {val}
                  </div>
                )
              })
            }
          </div>
          <div>
            <div className="w-[50vw] border-b-[2px] border-gray-700 ">
              {movieInfo.Plot}
            </div>
            <div className="w-[50vw] border-b-[2px] border-gray-700 ">
              <h1>
                Director <span>{movieInfo.Director}</span>{' '}
              </h1>
            </div>
            <div className="w-[50vw] border-b-[2px] border-gray-700 ">
              <h1>
                Writer <span>{movieInfo.Writer}</span>{' '}
              </h1>
            </div>
            <div className="w-[50vw] border-b-[2px] border-gray-700 ">
              <h1>
                Actors <span>{movieInfo.Actors}</span>{' '}
              </h1>
            </div>
            <div className="w-[50vw] border-b-[2px] border-gray-700 ">
              <h1>
                Awards <span>{movieInfo.Awards}</span>{' '}
              </h1>
            </div>
          </div>
          <div>
            <h1>
              <span className="w-[2px] h-[5rem] bg-[#f5c518]"> </span>
              Details
            </h1>
            <div>
              <h1>
                Release Date <span>{movieInfo.Released}</span>
              </h1>
            </div>
            <div>
              <h1>
                Runtime <span>{movieInfo.Runtime}</span>
              </h1>
            </div>
            <div>
              <h1>
                Official site <span>{movieInfo.Website}</span>
              </h1>
            </div>
            <div>
              <h1>
                Language <span>{movieInfo.Language}</span>
              </h1>
            </div>
            <div>
              <h1>
                Country <span>{movieInfo.Country}</span>
              </h1>
            </div>
            <div>
              <h1>
                Production company <span>{movieInfo.Production}</span>
              </h1>
            </div>
            <div>
              <h1>
                Box Office <span>{movieInfo.BoxOffice}</span>
              </h1>
            </div>
          </div>
          <div className="flex space-x-4 justify-center w-full flex-wrap items-center ">
            {movieInfo?.Ratings?.map((val) => {
              return (
                <div
                  className="m-2 p-4 bg-cyan-700 min-w-[30vw]"
                  key={val?.Value}
                >
                  <h1>Source {val?.Source}</h1>
                  <p>Ratings {val?.Value}</p>
                </div>
              );
            })}`
          </div>
        </div>
      </div>
    </>
  );
}
