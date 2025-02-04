import {useMovieList} from "../../api/get-movie-list/get-movie-list-hooks.ts";
import {useEffect, useState} from "react";
import {Box, Card, CardMedia, Container, Pagination, Typography} from "@mui/material";
import {movieTitle} from "../../store/serch-input-store/search-input-store.tsx";
import {observer} from "mobx-react-lite";
import {useNavigate} from "react-router-dom";
import {MovieArray} from "../../interfaces/movie-array.ts";

export const MovieListComponent = observer(() => {
    const [movieArray, setMovieArray] = useState<MovieArray[] | null>(null);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState<number | null>(null);
    const {data: movieList} = useMovieList({name: movieTitle.movieTitle, page: page});
    const navigate = useNavigate();

    const handleGoToMovie = (imdbId: string) => {
        navigate(`/movie/${imdbId}`);
    }

    const handleSelectPage = (event: React.ChangeEvent<unknown>, page: number) => {
        setPage(page);
    }

    useEffect(() => {
        if(movieList) {
            setMovieArray(movieList.Search);
            setTotalPages(Number(movieList.totalResults));
        }
    }, [movieList])

    return(
            <Container sx={{marginTop: 2, marginBottom: 2}}>
                <Box sx={{display: 'flex', flexWrap: 'wrap', gap: 2}}>
                        {
                            movieArray ? movieArray.map((movie: MovieArray) => (
                                <Box key={movie.imdbID} sx={{ width: 'calc(20% - 16px)', cursor: 'pointer' }}>
                                    <Card
                                        onClick={() => handleGoToMovie(movie.imdbID)}
                                        sx={{
                                            maxWidth: 250,
                                            height: 400,
                                            transition: "0.3s",
                                            "&:hover": {
                                                transform: "scale(1.05)",
                                                boxShadow: 6,
                                            },
                                            cursor: 'pointer'}}>
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
                <Box sx={{marginTop: 1, justifyContent: 'flex-end', display: 'flex'}}>
                    {
                        totalPages ?
                            <Pagination
                                count={Math.ceil(totalPages / 10)}
                                onChange={handleSelectPage}
                                sx={{
                                    '& .MuiPaginationItem-root.Mui-selected': {
                                        backgroundColor: '#fbb117',
                                        color: 'white',
                                    },
                                }}
                            /> : ''
                    }
                </Box>
            </Container>
    )
});