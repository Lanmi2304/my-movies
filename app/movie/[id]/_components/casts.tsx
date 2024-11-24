import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

interface Cast {
  profile_path: string;
  character: string;
  name: string;
}

const getCasts = async (id: number) => {
  const url = `https://api.themoviedb.org/3/movie/${id}/credits?language=en-US`;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzODI4Y2M5YmVlMjQ3MDlkNmNiM2M0ZjQxZTU0MmIxZSIsIm5iZiI6MTczMjQ0NzA3MC4wMTQyMzM0LCJzdWIiOiI2NzQxMTQyZmNjZTY2Y2Y4OTllOTQ0YjgiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.Jwdy37Me9LwCmJbfFZmDsMTq8DBCfDhGfZMh8BRYl8s",
    },
  };

  const result = await fetch(url, options);
  const data = await result.json();

  return data.cast.splice(0, 10);
};

export async function Casts({ id }: { id: number }) {
  const casts = await getCasts(id);
  console.log(casts);

  return (
    <Carousel className="w-full mt-10" opts={{ dragFree: true }}>
      <CarouselContent className="-ml-1">
        {casts.map((cast: Cast) => (
          <CarouselItem
            key={crypto.randomUUID()}
            className="pl-1 basis-1/2 md:basis-1/2 lg:basis-1/3"
          >
            <div className="p-1">
              <div className="flex flex-col items-center justify-center">
                <Avatar className="size-28">
                  <AvatarImage
                    src={`https://image.tmdb.org/t/p/original/${cast.profile_path}`}
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div className="mt-2 text-center ">
                  <p className="font-bold">{cast.character}</p>
                  <p>{cast.name}</p>
                </div>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
