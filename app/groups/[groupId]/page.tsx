import { getMoviesFromTMDb } from "@/lib/actions/moviedb";
import React from "react";

export default async function WelcomePage() {
  const movies = await getMoviesFromTMDb();
  return (
    <div>
      <h1>WELCOME TO YOUR GROUP</h1>
    </div>
  );
}
