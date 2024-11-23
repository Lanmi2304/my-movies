"use client";

import { z } from "zod";

const formSchema = z.object({
  title: z.string().min(1).max(50),
});

import { Container } from "@/components/shared/wrapper/container";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export function Search() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
    },
  });

  const router = useRouter();

  async function onSubmit({ title }: z.infer<typeof formSchema>) {
    router.push(`/search?title=${title}`);
    form.reset();
  }

  return (
    <div className="w-full h-32 bg-white shadow-lg">
      <Container className="pt-8">
        <h1 className="text-4xl font-bold py-4">Discover</h1>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem className="relative">
                  <FormControl>
                    <Input
                      placeholder="Find movies and shows..."
                      className="h-14"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                  <Button className="absolute top-0 right-2" type="submit">
                    Search
                  </Button>
                </FormItem>
              )}
            />
          </form>
        </Form>
      </Container>
    </div>
  );
}
