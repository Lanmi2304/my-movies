// import { Container } from "@/components/shared/wrapper/container";
import { Container } from "@/components/shared/wrapper/container";
import { PiClockDefaultStroke } from "@/components/ui/icon/pi-clock-default-stroke";
import { PiStarStroke } from "@/components/ui/icon/pi-star-stroke";
import { cn } from "@/lib/utils/cn";
import Image from "next/image";
import { Casts } from "./_components/casts";

const getMovieDetails = async (id: number) => {
  const url = `https://api.themoviedb.org/3/movie/${id}?language=en-US`;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzODI4Y2M5YmVlMjQ3MDlkNmNiM2M0ZjQxZTU0MmIxZSIsIm5iZiI6MTczMjQ0NzA3MC4wMTQyMzM0LCJzdWIiOiI2NzQxMTQyZmNjZTY2Y2Y4OTllOTQ0YjgiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.Jwdy37Me9LwCmJbfFZmDsMTq8DBCfDhGfZMh8BRYl8s",
    },
  };

  const res = await fetch(url, options);
  const result = await res.json();
  return result;
};

export default async function MovieInfo({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  const movie = await getMovieDetails(Number(id));

  console.log(movie);

  return (
    <>
      <div className=" relative w-full h-[400px]">
        <Image
          src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
          alt={"Movie poster"}
          fill
          className="absolute inset-0 object-cover rounded-b-md"
        />

        <div className="rounded-b-md text-white w-full flex-col gap-2 flex px-4 absolute bottom-0 backdrop-blur-sm h-fit py-4 bg-black/75">
          <h1 className=" text-2xl">{movie.title}</h1>

          <div className="flex gap-4">
            <div
              className={cn(
                "font-bold text-lg flex items-center gap-2",
                movie.vote_average <= 4
                  ? "text-red-500"
                  : movie.vote_average <= 7
                    ? "text-orange-500"
                    : "text-green-500",
              )}
            >
              {movie.vote_average.toFixed(1)}
              <PiStarStroke className="size-5 text-orange-500" />
            </div>
            <div className="flex font-bold text-lg items-center gap-2">
              <p>{movie.runtime} min</p>
              <PiClockDefaultStroke className="size-5" />
            </div>
            <p className="font-bold text-lg">{movie.release_date}</p>
          </div>
        </div>
      </div>

      <Container>
        <h1 className="text-3xl font-bold mt-10 mb-4">Overview</h1>
        <p>{movie.overview}</p>

        <h1 className="text-3xl font-bold mt-10 mb-4">Casts</h1>
        <Casts id={Number(id)} />
      </Container>
    </>
  );
}
