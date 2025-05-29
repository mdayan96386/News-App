import React from "react";
import { useContext } from "react";
import NewsContext from "../context/news/NewsContext";

function NewsCard({ news }) {
  const { theme } = useContext(NewsContext);

  return (
    <div
      className={
        theme
          ? "flex flex-col md:flex-row  p-3 rounded-sm border border-sky-200 text-gray-500"
          : "flex flex-col md:flex-row  p-3 rounded-sm border border-sky-200"
      }
    >
      <div className="w-full md:w-2/5 flex items-center justify-center">
        <img
          className="h-56 w-56"
          src={
            news.image ||
            "https://media.istockphoto.com/id/1409329028/vector/no-picture-available-placeholder-thumbnail-icon-illustration-design.jpg?s=612x612&w=0&k=20&c=_zOuJu755g2eEUioiOUdz_mHKJQJn-tDgIAhQzyeKUQ="
          }
          alt=""
        />
      </div>
      <div className="w-full md:w-3/5">
        <h1
          className={
            theme
              ? "font-bold my-2 text-2xl text-gray-200"
              : "font-bold my-2 text-2xl"
          }
        >
          {news.title}
        </h1>
        <p className="text-sm text-gray-500 max-w-sm my-2">
          {news.description}
        </p>
        <p className="text-gray-400 text-xs my-2">Author: {news.author}</p>
        <p className="text-gray-400 text-xs my-2">
          Date: {new Date(news.publishedAt).toLocaleDateString("en-IN")}
        </p>
        <a
          href={news.url}
          target="_blank"
          className="float-end bg-green-500 py1.5 px-5 roundedd-md text-white font-bold hover:bg-green-600 duration-200"
        >
          Read More
        </a>
      </div>
    </div>
  );
}

export default NewsCard;
