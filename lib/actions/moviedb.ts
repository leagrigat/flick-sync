const TMDB_API_KEY = process.env.TMDB_API_KEY;

if (!TMDB_API_KEY) {
    throw new Error("Missing TMDB API key in .env.local");
}

export async function getMoviesFromTMDb() {
    const url = `https://api.themoviedb.org/3/search/movie?`;

    const response = await fetch(url);

    if(!response.ok) {
        throw new Error("Failed to fetch movies from TMDb");
    }

    const data = await response.json();
    return data.results || [];
}