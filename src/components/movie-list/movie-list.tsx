import {useMovieList} from "../../api/get-movie-list/get-movie-list-hooks.ts";
import {useEffect, useState} from "react";
import {Box, Container, Pagination} from "@mui/material";
import {movieTitle} from "../../store/serch-input-store/search-input-store.tsx";
import {observer} from "mobx-react-lite";
import {MovieArray} from "../../interfaces/movie-array.ts";
import {MovieArrayComponent} from "../movie-array/movie-array.tsx";

export const MovieListComponent = observer(() => {
    const [movieArray, setMovieArray] = useState<MovieArray[] | null>(null);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState<number | null>(null);
    const {data: movieList} = useMovieList({name: movieTitle.movieTitle, page: page});

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
                            movieArray ? <MovieArrayComponent movies={movieArray} /> : ''
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