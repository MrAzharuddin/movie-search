import React, { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Movie from "./pages/Movie.jsx";

function App() {
  const [search, setSearch] = useState("");
  const [finalSearch, setFinalSearch] = useState("");
  const handleEnter = (e) => {
    if(e.key === "Enter") {
      e.preventDefault();
      setFinalSearch(search);
      setSearch("");
    }
  };
  return (
    <div>
      <div className="py-2 bg-transparent">
        <div className="flex justify-around items-center">
          <div>
            <h1 className="text-3xl font-bold font-Amatic">
              <Link to="/">Wat da Review</Link>
            </h1>
          </div>
          <div className="border-b-[1px] md:text-base text-sm rounded-none md:px-1 md:max-w-[350px] max-w-[170px]">
            <input
              onChange={(e) => setSearch(e.target.value)}
              onKeyDown={handleEnter}
              className="border-0 rounded-md border-none outline-none md:px-8 px-1 py-1 w-[80%]"
              type="text"
              placeholder="Search"
            />
          </div>
        </div>
      </div>
      <Routes>
        <Route path="/" exact element={<Home searchData={finalSearch} />} />
        <Route path="/:id" element={<Movie />} />
      </Routes>
    </div>
  );
}

export default App;
