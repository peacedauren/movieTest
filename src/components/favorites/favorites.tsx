import {Container} from "@mui/material";
import {favoriteMovies} from "../../store/favorites-store/favorites-store.tsx";
import {MovieArray} from "../../interfaces/movie-array.ts";
import {MovieArrayComponent} from "../movie-array/movie-array.tsx";

export const FavoritesComponent = () => {
    const favorites: MovieArray[] = favoriteMovies.movies;
    return (
        <Container sx={{marginTop: 2}}>
            <MovieArrayComponent movies={favorites}/>
        </Container>
    )
}