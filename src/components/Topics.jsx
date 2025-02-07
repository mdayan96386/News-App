import React, { useContext } from "react";
import { fetchNews } from "../context/news/NewsService";
import NewsContext from "../context/news/NewsContext";

function Topics() {

  const { dispatch } = useContext(NewsContext);

  const getNews = async (topic) => {
    const data = await fetchNews(topic);
    dispatch({
      type: "GET_NEWS",
      payload: data,
    });
  };


  return (
    <div className="my-3 flex items-center justify-center flex-wrap">
      <p onClick={() => getNews("Indian Sports")} className="px-4 py-2 bg-gray-200 rounded-md m-1 hover:bg-gray-400 duration-200">
        Sports
      </p>
      <p onClick={() => getNews("Indian Entertainment")} className="px-4 py-2 bg-gray-200 rounded-md m-1 hover:bg-gray-400 duration-200">
        Enterainment
      </p>
      <p onClick={() => getNews("WorldWide")} className="px-4 py-2 bg-gray-200 rounded-md m-1 hover:bg-gray-400 duration-200">
        International
      </p>
      <p onClick={() => getNews("Indian Politics")} className="px-4 py-2 bg-gray-200 rounded-md m-1 hover:bg-gray-400 duration-200">
        Politics
      </p>
      <p onClick={() => getNews("Indian Economics")} className="px-4 py-2 bg-gray-200 rounded-md m-1 hover:bg-gray-400 duration-200">
        Economics
      </p>
      <p onClick={() => getNews("Technology")} className="px-4 py-2 bg-gray-200 rounded-md m-1 hover:bg-gray-400 duration-200">
        Technology
      </p>
      <p onClick={() => getNews(" Crypto Currency")} className="px-4 py-2 bg-gray-200 rounded-md m-1 hover:bg-gray-400 duration-200">
        Crypto
      </p>
      <p onClick={() => getNews("Indian Farmers")} className="px-4 py-2 bg-gray-200 rounded-md m-1 hover:bg-gray-400 duration-200">
        Agriculture
      </p>
    </div>
  );
}

export default Topics;
