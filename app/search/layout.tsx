import { Search } from "@/components/shared/search";

export default function MovieLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <Search />
      {children}
    </section>
  );
}
