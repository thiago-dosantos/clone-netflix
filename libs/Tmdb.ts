const API_KEY = 'a4199a8603d5accdee9b726f7047de27';
const API_BASE = 'https://api.themoviedb.org/3';

// netflix originals
// trending
// top rated
// category

const basicFetch = async (endpoint: string) => {
    const req = await fetch(`${API_BASE}${endpoint}`);
    const json = await req.json();
    return json;
}

export default {
    getHomeList: async () => {
        return [
            {    
                slug: 'originals',
                title: 'Netflix Originals',
                items: await basicFetch(`/discover/tv?with_network=213&api_key=${API_KEY}`)
            },
            {
                slug: 'treding',
                title: 'Recommended for you',
                items: await basicFetch(`/trending/all/week?&api_key=${API_KEY}`)
            },
            {
                slug: 'toprated',
                title: 'Top Rated',
                items: await basicFetch(`/tv/top_rated?api_key=${API_KEY}`)
            },
            {
                slug: 'action',
                title: 'Action',
                items: await basicFetch(`/discover/movie?with_genres=28&api_key=${API_KEY}`)
            },
            {
                slug: 'comedy',
                title: 'Comedy',
                items: await basicFetch(`/discover/movie?with_genres=35&api_key=${API_KEY}`)
            },
            {
                slug: 'horror',
                title: 'Horror',
                items: await basicFetch(`/discover/movie?with_genres=27&api_key=${API_KEY}`)
            },
            {
                slug: 'romance',
                title: 'Romance',
                items: await basicFetch(`/discover/movie?with_genres=10749&api_key=${API_KEY}`)
            },
            {
                slug: 'documentary',
                title: 'Documentary',
                items: await basicFetch(`/discover/movie?with_genres=99&api_key=${API_KEY}`)
            }
        ];

    },
    getMovieInfo: async (movieId, type) => {
        let info ={};

        if(movieId){
            switch(type) {
                case 'movie':
                    info = await basicFetch(`/movie/${movieId}?api_key=${API_KEY}`);
                break;

                case 'tv':
                    info = await basicFetch(`/tv/${movieId}?api_key=${API_KEY}`);
                break;
                default:
                    info = null;
                break;
            }
        }

        return info;
    }
}