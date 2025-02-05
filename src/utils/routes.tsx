import {MovieListComponent} from "../components/movie-list/movie-list.tsx";
import {MovieInfoComponent} from "../components/movie-info/movie-info.tsx";
import {FavoritesComponent} from "../components/favorites/favorites.tsx";

export const routes = [
    {
        path: '/',
        element: <MovieListComponent />
    },
    {
        path: 'movie/:movieId',
        element: <MovieInfoComponent />
    },
    {
        path: '/favorites',
        element: <FavoritesComponent />
    }
]