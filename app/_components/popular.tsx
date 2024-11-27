import { MovieCard } from "../../components/shared/movie-card";
import { Container } from "@/components/shared/wrapper/container";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export async function Popular() {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/popular?language=en-US&page=1'`,
    {
      cache: "force-cache",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${process.env.TMDB_API_KEY}`,
      },
    },
  );

  if (!res.ok) {
    throw new Error("Failed to fetch movies");
  }

  const data = await res.json();
  const movies: [] = data.results || [];

  return (
    <section>
      <Container className="mt-20">
        <div>
          <h1 className="text-4xl font-bold py-4">Popular</h1>
          {movies.length === 0 ? (
            <p>No movies found</p>
          ) : (
            <Carousel className="w-full" opts={{ loop: true, dragFree: true }}>
              <CarouselContent className="-ml-1">
                {movies.map((movie) => (
                  <CarouselItem
                    key={crypto.randomUUID()}
                    className="pl-1 basis-1/2 md:basis-1/2 lg:basis-1/3"
                  >
                    <div className="p-1">
                      <MovieCard popular={true} movie={movie} />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          )}
        </div>
        <p className="py-4 text-medium text-md leading-tight">
          Check out the trending films everyone is watching. From recent hits to
          fan favorites, find your next must-see movie here!
        </p>
      </Container>
    </section>
  );
}
