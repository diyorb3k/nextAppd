"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const Hom = () => {
  const [movies, setMovies] = useState([]);
  const query = "your search term"; // Define your search query here
  const api_key = 'YOUR_API_KEY'; // Replace with your actual API key
  const url = `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${query}`;
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setMovies(data.results);
      } catch (error) {
        console.error("Error fetching movie data:", error);
      }
    };
    fetchMovies();
  }, [url]);
  return (
    <div>
      {movies.map((movie) => (
        <div key={movie.id}> 
          <h2>{movie.title}</h2> {/* Display movie title */}
          <p>{movie.overview}</p> {/* Display movie overview */}
          {movie.poster_path && ( // Conditional rendering for the image
            <Image 
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
              alt={movie.title} 
              width={200} 
              height={300} 
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default Hom;
