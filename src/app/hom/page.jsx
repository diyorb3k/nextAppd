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
    <div>
      {news.map((article, index) => (
        <div key={index}>
          <p>{article.title}</p>
          
          {/* Show thumbnail image */}
          {article.socialimage && (
            <a href={article.url} target="_blank" rel="noopener noreferrer">
              <img 
                src={article.socialimage} 
                alt={article.title} 
                style={{ width: '100%', maxWidth: '560px', height: '315px' }} 
              />
            </a>
          )}
        </div>
      ))}
    </div>
  );
};

export default Hom;
