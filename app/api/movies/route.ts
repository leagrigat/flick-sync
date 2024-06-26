import { NextResponse } from "next/server";

const TMDB_API_KEY = process.env.TMDB_API_KEY;
const TMDB_ACCESS_TOKEN = process.env.TMDB_ACCESS_TOKEN;

if (!TMDB_API_KEY) {
  throw new Error("Missing TMDB API key in .env.local");
}

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const searchInput = searchParams.get("searchInput");

    if (!searchInput) {
      return NextResponse.json(
        { error: "searchInput query parameter is required" },
        { status: 400 }
      );
    }

    const encodedQuery = encodeURIComponent(searchInput);
    const url = `https://api.themoviedb.org/3/search/movie?query=${encodedQuery}`;

    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${TMDB_ACCESS_TOKEN}`,
        accept: "application/json",
      },
    });

    if (!response.ok) {
      const errorData = await response.json();
      return NextResponse.json(
        { error: "Failed to fetch movies from TMDb", details: errorData },
        { status: response.status }
      );
    }

    const data = await response.json();
    return NextResponse.json({ movies: data.results });
  } catch (e) {
    console.error(e);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
