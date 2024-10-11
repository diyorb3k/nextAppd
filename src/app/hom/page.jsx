'use client';

import { useEffect, useState } from "react";

const Hom = () => {
  const [news, setNews] = useState([]);
  console.log(news);
  const url = `https://api.gdeltproject.org/api/v2/doc/doc?query=America&mode=artlist&format=json`;

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setNews(data.articles || []); 
      } catch (error) {
        console.log('error', error);
      }
    };
    fetchNews();
  }, []);

  return (
    <div className="container pt-20 mx-auto px-4 py-8 bg-blue-200">
      <h1 className="text-2xl pt-11 font-bold mb-6 text-center">World news</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {news.map((article, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
            {article.socialimage && (
              <a href={article.url} target="_blank" rel="noopener noreferrer">
                <img 
                  src={article.socialimage} 
                  alt={article.title} 
                  className="w-full h-48 object-cover"
                />
              </a>
            )}
            <div className="p-4">
              <h2 className="font-semibold text-lg mb-2">{article.title}</h2>
              <p className="text-sm text-gray-600">{article.seendate}</p>
              <a href={article.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                Read more
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hom;
