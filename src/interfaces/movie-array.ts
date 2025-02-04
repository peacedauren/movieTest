export interface MovieArray {
    imdbID: string;
    Title: string;
    Poster: string;
    Year: number;
    Type: string;
}

export interface IMovieList {
    Search: MovieArray[]
    totalResults: string;
}