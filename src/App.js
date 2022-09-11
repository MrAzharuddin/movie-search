import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Movie from "./pages/Movie.jsx";

function App() {
  const [search, setSearch] = useState("");
  const [finalSearch, setFinalSearch] = useState("");
  return (
    <div>
      <div className="py-2 bg-transparent">
        <div className="flex justify-around items-center">
          <div>
            <h1 className="text-5xl font-bold font-Qwitcher">Wat da Review</h1>
          </div>
          <div className="border-[2px] rounded-full px-3">
            <input
              onChange={(e) => setSearch(e.target.value)}
              className="border-2 rounded-md border-none outline-none px-8 py-1"
              type="text"
              placeholder="Search for Movies"
            />
            <button
              onClick={(e) => {
                e.preventDefault();
                setFinalSearch(search);
                setSearch("");
              }}
              className="px-4 py-1 text-sm rounded-md text-white font-bold"
            >
              &#128269;
            </button>
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
