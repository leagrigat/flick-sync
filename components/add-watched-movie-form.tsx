"use client";

import useSWR from "swr";
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons";
import { useForm } from "react-hook-form";
import React, { useCallback, useState } from "react";
import debounce from "lodash/debounce";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CommandList } from "cmdk";

type Movie = {
  title: string;
  id: string;
};

const AddWatchedMovieFormSchema = z.object({
  movie: z.string({ required_error: "Please select a movie." }),
});

const fetcher = (url: string) =>
  fetch(url)
    .then((r) => r.json())
    .then((data) => {
      console.log("Fetched data", data);
      return data;
    });

export default function AddWatchedMovieForm() {
  const [query, setQuery] = useState("");
  const { data, error } = useSWR(
    query ? `/api/movies?searchInput=${query}` : null,
    fetcher
  );

  const form = useForm({
    resolver: zodResolver(AddWatchedMovieFormSchema),
  });

  const handleSearch = useCallback(
    debounce((value: string) => {
      setQuery(value);
    }, 100),
    []
  );

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    handleSearch(event.target.value);
  };

  if (error) return <div>Failed to load</div>;
  //if (!data) return <div>Loading...</div>;

  return (
    <Form {...form}>
      <form>
        <FormField
          control={form.control}
          name="movie"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Add watched movie</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant="outline"
                      role="combobox"
                      className={cn(
                        "w-[200px] justify-between",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value
                        ? data.movies.find(
                            (movie: Movie) => movie.id === field.value
                          )?.label
                        : "Select movie"}
                      <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-[200px] p-0">
                  <Command>
                    <input
                      placeholder="Search movie..."
                      className="h-9"
                      onChange={handleChange}
                      value={query}
                    />
                    <CommandEmpty>No movie found.</CommandEmpty>
                    <CommandList>
                      <CommandGroup>
                        {data?.movies?.map((movie: Movie) => (
                          <CommandItem
                            value={movie.title}
                            key={movie.id}
                            onSelect={() => {
                              form.setValue("movie", movie.id);
                            }}
                          >
                            {movie.title}
                            <CheckIcon
                              className={cn(
                                "ml-auto h-4 w-4",
                                movie.id === field.value
                                  ? "opacity-100"
                                  : "opacity-0"
                              )}
                            />
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </PopoverContent>
              </Popover>
              {/*  <FormDescription>
              This is the language that will be used in the dashboard.
            </FormDescription> */}
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
