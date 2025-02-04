import { makeAutoObservable } from "mobx";

class SearchInputStore {
    movieTitle = "";

    constructor() {
        makeAutoObservable(this);
    }

    setMovieTitle(title: string) {
        this.movieTitle = title;
    }
}

export const movieTitle = new SearchInputStore();