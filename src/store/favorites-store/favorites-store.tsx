import { makeAutoObservable } from "mobx";
import {MovieArray} from "../../interfaces/movie-array.ts";

class FavoritesMoviesStore {
    movies: MovieArray[] = [];

    constructor() {
        makeAutoObservable(this);
    }

    addMovieToFavorites(movie: MovieArray) {
        this.movies.push(movie);
    }

    isFavorite(imdbID: string) {
        return this.movies.some((movie) => movie.imdbID === imdbID);
    }
}

export const favoriteMovies = new FavoritesMoviesStore();