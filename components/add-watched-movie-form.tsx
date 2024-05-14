"use client";

import { getMoviesFromTMDb } from "@/lib/actions/moviedb";
import useSWR from "swr";
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons";
import { useForm } from "react-hook-form";
import React from "react";
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

const movies = [
  { label: "Aftersun", value: "as" },
  { label: "Only Lovers Left Alive", value: "olla" },
  { label: "Burning", value: "bn" },
  { label: "Hereditary", value: "hd" },
  { label: "Moonlight", value: "ml" },
  { label: "The Lord Of The Rings", value: "tlotr" },
] as const;

const AddWatchedMovieFormSchema = z.object({
  movie: z.string({ required_error: "Please select a movie." }),
});

// export type AddWatchedMovieFormType = z.infer<typeof AddWatchedMovieFormSchema>;

export default function AddWatchedMovieForm() {
  const { data, error } = useSWR("");

  const form = useForm<z.infer<typeof AddWatchedMovieFormSchema>>({
    resolver: zodResolver(AddWatchedMovieFormSchema),
  });
  //   const movies = getMoviesFromTMDb();
  //   function onSubmit

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
                        ? movies.find((movie) => movie.value === field.value)
                            ?.label
                        : "Select movie"}
                      <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-[200px] p-0">
                  <Command>
                    <CommandInput
                      placeholder="Search movie..."
                      className="h-9"
                    />
                    <CommandEmpty>No movie found.</CommandEmpty>
                    <CommandList>
                      <CommandGroup>
                        {movies.map((movie) => (
                          <CommandItem
                            value={movie.label}
                            key={movie.value}
                            onSelect={() => {
                              form.setValue("movie", movie.value);
                            }}
                          >
                            {movie.label}
                            <CheckIcon
                              className={cn(
                                "ml-auto h-4 w-4",
                                movie.value === field.value
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
      </form>
    </Form>
  );
}
