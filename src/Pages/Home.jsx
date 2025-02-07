import React, { useContext, useEffect } from "react";
import SearchForm from "../components/SearchForm";
import Topics from "../components/Topics";
import WeatherCard from "../components/WeatherCard";
import NewsCard from "../components/NewsCard";
import NewsContext from "../context/news/NewsContext";
import { fetchNews } from "../context/news/NewsService";

function Home() {
  const { dispatch, allNews, theme } = useContext(NewsContext);

  const getNews = async (topic) => {
    const data = await fetchNews(topic);
    dispatch({
      type: "GET_NEWS",
      payload: data,
    });
  };

  useEffect(() => {
    getNews("Indore");
  }, []);

  return (
    <div
      className={
        theme ? " mx-auto p-10 bg-gray-900" : " mx-auto p-10"
      }
    >
      <div className="p-4 md:p-10">
        <SearchForm />
        <Topics />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <WeatherCard />

        <div className="p-3 border shadow col-span-1 md:col-span-2">
          {allNews.length === 0 ? (
            <>
              <h1 className="text-center my-2 font-bold text-gray-400">
                Fetching News...
              </h1>
            </>
          ) : (
            allNews.map((news, index) => <NewsCard key={index} news={news} />)
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
