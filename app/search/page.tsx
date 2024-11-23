import { Suspense } from "react";
import { Search } from "../_components/search";
import MoviesList from "../../components/shared/movies";
import Loading from "./loading";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const queries = await searchParams;
  const title = queries.title;

  return (
    <>
      <Search />
      <Suspense fallback={<Loading />}>
        <MoviesList title={String(title)} />
      </Suspense>
    </>
  );
}
