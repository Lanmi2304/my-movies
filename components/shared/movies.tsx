// app/search/movies-list.tsx

import { Container } from "@/components/shared/wrapper/container";
import { MovieCard } from "../../app/search/_components/movie-card";

interface MoviesListProps {
  title: string;
}

export interface Movie {
  language: "string";
  poster_path: string;
  title: string;
  popularity: number;
  release_date: string;
  vote_average: number;
  genre_ids: number[];
}

export default async function MoviesList({ title }: MoviesListProps) {
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?query=${title}&include_adult=false&language=en-US&page=1`,
    {
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${process.env.TMDB_API_KEY}`,
      },
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch movies");
  }

  const data = await res.json();
  const movies: [] = data.results || [];

  return (
    <div className="mt-20 px-1">
      {movies.length === 0 ? (
        <p>No movies found</p>
      ) : (
        <div className="grid grid-cols-2 gap-2">
          {movies.map((movie: Movie) => (
            <MovieCard key={crypto.randomUUID()} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
}
