import {Box, Container, Typography} from "@mui/material";
import {useParams} from "react-router-dom";
import {useMovieInfo} from "../../api/get-movie-info/get-movie-info-hooks.ts";
import {AboutMovie} from "../about-movie/about-movie.tsx";
import {useYoutubeTrailer} from "../../api/get-youtube-trailer/get-youtube-trailer-hooks.ts";
import {useEffect, useState} from "react";

export const MovieInfoComponent = () => {
    const params = useParams();

    const [trailer, setTrailer] = useState<string>('');
    const [youTubeParams, setYouTubeParams] = useState<{title: string | null, year: string | null}>({title: null, year: null});

    const {data: movieInfo, isLoading} = useMovieInfo({id: params.movieId ? params.movieId : ''});
    const {data: youTubeTrailer} = useYoutubeTrailer({movieTitle: youTubeParams.title, year: youTubeParams.year});

    useEffect(() => {
        if(youTubeTrailer) {
            const link = youTubeTrailer.items[0].id.videoId;
            const trailerLink = `https://www.youtube.com/embed/${link}`;
            setTrailer(trailerLink);
        }
    }, [youTubeTrailer]);

    useEffect(() => {
        if(movieInfo) {
            setYouTubeParams({title: movieInfo.Title, year: movieInfo.Year})
        }
    }, [movieInfo]);
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
                        <Box sx={{marginTop: 2}}>
                            <Typography gutterBottom variant="h6" component="div">
                                {movieInfo.Plot}
                            </Typography>
                        </Box>
                        <Box sx={{ position: "relative", width: "100%", aspectRatio: "16 / 9" }}>
                            {
                                trailer ? (
                                    <iframe
                                        width="100%"
                                        height="100%"
                                        src={trailer}
                                        title="Film Trailer"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    />
                                ) : ''
                            }
                        </Box>
                    </Box>
                ) : ''
            }
        </Container>
    )
}