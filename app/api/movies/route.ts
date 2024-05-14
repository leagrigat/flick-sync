const TMDB_API_KEY = process.env.TMDB_API_KEY;

if (!TMDB_API_KEY) {
    throw new Error("Missing TMDB API key in .env.local");
}

const handler = async (req, res) => {
    const {query} = req;
    const {page = 1} = query;

    try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.TMDB_API_KEY}&page=${page}`); // need different url?
        res.status(200).json(response.data);
    } catch(error) {
        console.error('Failed to fetch data from TMDb', error);
        res.status(500).json({ error: 'Failed to fetch data from TMDb' });
    }
}

export default handler;