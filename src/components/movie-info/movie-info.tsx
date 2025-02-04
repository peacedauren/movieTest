import {Box, Container, Typography} from "@mui/material";
import {useParams} from "react-router-dom";
import {useMovieInfo} from "../../api/get-movie-info/get-movie-info-hooks.ts";
import {AboutMovie} from "../about-movie/about-movie.tsx";

export const MovieInfoComponent = () => {
    const params = useParams();
    const {data: movieInfo, isLoading} = useMovieInfo({id: params.movieId ? params.movieId : ''});

    if(isLoading) {
        return <Container sx={{marginTop: 2}}>Loading...</Container>
    }

    return (
        <Container sx={{marginTop: 2, marginBottom: 2}}>
            {
                movieInfo ? (
                    <Box>
                        <Box sx={{display: 'flex'}}>
                            <Box sx={{marginRight: 2}}>
                                <img src={movieInfo.Poster} alt={movieInfo.Title}/>
                            </Box>
                            <Box>
                                <Typography gutterBottom variant="h4" component="div">
                                    {movieInfo.Title}
                                </Typography>
                                <Typography gutterBottom variant="h6" component="div" sx={{color: 'gray'}}>
                                    {movieInfo.Rated}
                                </Typography>
                                <Box>
                                    <Typography gutterBottom variant="h5" component="div">О фильме:</Typography>
                                    <AboutMovie movieInfo={movieInfo}/>
                                </Box>
                            </Box>
                        </Box>
                        <Box sx={{marginTop: 2}}><Typography gutterBottom variant="h6" component="div">
                            {movieInfo.Plot}
                        </Typography></Box>
                    </Box>
                ) : ''
            }
        </Container>
    )
}