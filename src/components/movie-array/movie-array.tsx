import {MovieArray} from "../../interfaces/movie-array.ts";
import {Box, Button, Card, CardMedia, Typography} from "@mui/material";
import {favoriteMovies} from "../../store/favorites-store/favorites-store.tsx";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import {useNavigate} from "react-router-dom";
import {observer} from "mobx-react-lite";

interface Props {
    movies: MovieArray[];
}

export const MovieArrayComponent = observer(({movies}: Props) => {
    const navigate = useNavigate();

    const handleGoToMovie = (imdbId: string) => {
        navigate(`/movie/${imdbId}`);
    }

    return (
        <Box sx={{display: 'flex', flexWrap: 'wrap', gap: 2}}>
            {
                movies.length > 0 ? movies.map((movie: MovieArray) => (
                    <Box key={movie.imdbID} sx={{ width: 'calc(20% - 16px)', cursor: 'pointer' }}>
                        <Card
                            onClick={() => handleGoToMovie(movie.imdbID)}
                            sx={{
                                position: 'relative',
                                maxWidth: 250,
                                height: 400,
                                transition: "0.3s",
                                "&:hover": {
                                    transform: "scale(1.05)",
                                    boxShadow: 6,
                                },
                                cursor: 'pointer'}}>
                            <Button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    favoriteMovies.addMovieToFavorites(movie);
                                }}
                                disabled={favoriteMovies.isFavorite(movie.imdbID)}
                                sx={{position: 'absolute', top: 5, right: 5}}
                            >
                                {favoriteMovies.isFavorite(movie.imdbID) ? <FavoriteIcon color={'warning'} fontSize={'large'}/> : <FavoriteBorderIcon color={'warning'} fontSize={'large'}/>}
                            </Button>
                            <CardMedia
                                component="img"
                                height="250"
                                image={movie.Poster}
                                alt={movie.Title}
                                sx={{objectFit: 'contain'}}
                            />
                            <Box sx={{padding: 1}}>
                                <Typography gutterBottom variant="h6" component="div" sx={{height: 70}}>
                                    {movie.Title}
                                </Typography>
                                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                    Year: {movie.Year}
                                </Typography>
                            </Box>
                        </Card>
                    </Box>
                )) : ''
            }
        </Box>
    )
})