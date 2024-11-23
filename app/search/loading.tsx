import { Container } from "@/components/shared/wrapper/container";
import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <Container className="mt-20">
      <div className="grid grid-cols-2 gap-4">
        {Array.from({ length: 20 }).map(() => (
          <Skeleton key={crypto.randomUUID()} className="w-full h-[340px]" />
        ))}
      </div>
    </Container>
  );
}
