import { NextResponse } from "next/server";

const TMDB_API_KEY = process.env.TMDB_API_KEY;
const TMDB_ACCESS_TOKEN=process.env.TMDB_ACCESS_TOKEN;

if (!TMDB_API_KEY) {
    throw new Error("Missing TMDB API key in .env.local");
}

export async function GET(){
  const url = `https://api.themoviedb.org/3/search/movie?query=terminator`;

    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${TMDB_ACCESS_TOKEN}`,
        accept: "application/json"
      }
    });

    const data = await response.json();

    if(!response.ok) {
        throw new Error("Failed to fetch movies from TMDb");
    }

  return await NextResponse.json({data})
}