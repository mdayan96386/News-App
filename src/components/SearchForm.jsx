import React, { useContext, useState } from "react";
import NewsContext from "../context/news/NewsContext";
import { fetchNews } from "../context/news/NewsService";

function SearchForm() {
  const [text, setText] = useState("");
  const { dispatch, theme } = useContext(NewsContext);

  const getNews = async (topic) => {
    const data = await fetchNews(topic);
    dispatch({
      type: "GET_NEWS",
      payload: data,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getNews(text);
    setText("");
  };

  return (
    <>
      <h1
        className={
          theme
            ? "text-center text-4xl font-bold my-3 text-gray-200"
            : "text-center text-4xl font-bold my-3"
        }
      >
        Search Any News On The Planet
      </h1>
      <form className="w-full" onSubmit={handleSubmit}>
        <input
          type="text"
          className="border p-2 w-full md:w-3/4 my-3 md:rounded-l-lg placeholder:text-sm focus:outline-sky-200"
          placeholder="Enter Any Topic"
          required
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button className="bg-sky-500 py-2 px-4 text-white font-bold w-full md:w-1/4 md:rounded-r-lg hover:bg-sky-700 duration-200">
          Search News
        </button>
      </form>
    </>
  );
}

export default SearchForm;
