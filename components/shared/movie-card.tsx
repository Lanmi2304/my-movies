"use client";

import { Movie } from "@/components/shared/movies";
import { PiStarStroke } from "@/components/ui/icon/pi-star-stroke";
import { categoryTitle } from "@/lib/utils/categories";
import { cn } from "@/lib/utils/cn";
import Image from "next/image";
import { useRouter } from "next/navigation";

export function MovieCard({
  movie,
  popular,
  className,
}: {
  movie: Movie;
  popular?: boolean;
  className?: string;
}) {
  const router = useRouter();
  const categories = movie.genre_ids
    .map((id) => categoryTitle(id))
    .splice(0, 2)
    .join(", ");

  return (
    <div
      onClick={() => router.push(`/movie/${movie.id}`)}
      className={cn(
        "flex flex-col mb-2 shadow-card rounded-lg overflow-hidden hover:scale-105 border",
        className
      )}
    >
      <div className="relative w-full h-[320px]">
        <Image
          src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
          alt="Movie poster"
          fill
          className="rounded-b-lg  inset-0"
        />
      </div>

      {!popular && (
        <div className="px-2 py-6 gap-1">
          <h2 className="text-lg tracking-tighter text-foreground font-semibold">
            {movie.title}
          </h2>
          <p className="text-accent-foreground/70 text-sm">{categories}</p>
          <p className="text-accent-foreground/60 text-sm">
            {movie.release_date}
          </p>
          <div
            className={cn(
              "font-bold flex items-center gap-2",
              movie.vote_average <= 4
                ? "text-red-500"
                : movie.vote_average <= 7
                ? "text-orange-500"
                : "text-green-500"
            )}
          >
            {movie.vote_average.toFixed(1)}
            <PiStarStroke className="size-5 text-orange-500" />
          </div>
        </div>
      )}
    </div>
  );
}
