import React, { useContext } from "react";
import { use } from "react";
import NewsContext from "../context/news/NewsContext";

function Navbar() {
  const { theme } = useContext(NewsContext);

  return (
    <nav
      className={
        theme
          ? "bg-black py-4 px-16 shadow-sm"
          : "bg-blue-600 py-4 px-16 shadow-sm"
      }
    >
      <h1 className="text-white font-black text-xl">Daily News</h1>
    </nav>
  );
}

export default Navbar;
