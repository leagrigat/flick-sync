import AddWatchedMovieForm from "@/components/add-watched-movie-form";
import React from "react";

export default async function WelcomePage() {
  return (
    <div>
      <h1>WELCOME TO YOUR GROUP</h1>
      <AddWatchedMovieForm />
    </div>
  );
}
