import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Movie from "./pages/Movie.jsx";

function App() {
  const [search, setSearch] = useState("");
  const [finalSearch, setFinalSearch] = useState("");
  return (
    <div>
      <div className="flex justify-center items-center py-2">
        <input
          onChange={(e) => setSearch(e.target.value)}
          className="border-2 rounded-md border-slate-700 outline-none px-8 py-1 w-[45vw]"
          type="text"
          placeholder="Search for Movies"
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            setFinalSearch(search);
            setSearch("");
          }}
          className="px-6 py-1 text-lg bg-cyan-700 mx-6 rounded-md text-white font-bold"
        >
          Submit
        </button>
      </div>
      <Routes>
        <Route path="/" exact element={<Home searchData={finalSearch} />} />
        <Route path="/:id" element={<Movie />} />
      </Routes>
    </div>
  );
}

export default App;
