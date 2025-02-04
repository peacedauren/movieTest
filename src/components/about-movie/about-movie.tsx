import {Box, Typography} from "@mui/material";
import {IMovie} from "../../interfaces/movie-info.ts";

interface Props {
    movieInfo: IMovie
}

export const AboutMovie = ({ movieInfo }: Props) => {
    return (
        <Box>
            <Box sx={{display: 'flex'}}>
                <Typography gutterBottom variant="h6" component="div" sx={{color: 'gray', marginRight: 1}}>
                    Основные актеры:
                </Typography>
                <Typography gutterBottom variant="h6" component="div">
                    {movieInfo.Actors}
                </Typography>
            </Box>
            <Box sx={{display: 'flex'}}>
                <Typography gutterBottom variant="h6" component="div" sx={{color: 'gray', marginRight: 1}}>
                    Номинации:
                </Typography>
                <Typography gutterBottom variant="h6" component="div">
                    {movieInfo.Awards}
                </Typography>
            </Box>
            <Box sx={{display: 'flex'}}>
                <Typography gutterBottom variant="h6" component="div" sx={{color: 'gray', marginRight: 1}}>
                    Касса:
                </Typography>
                <Typography gutterBottom variant="h6" component="div">
                    {movieInfo.BoxOffice}
                </Typography>
            </Box>
            <Box sx={{display: 'flex'}}>
                <Typography gutterBottom variant="h6" component="div" sx={{color: 'gray', marginRight: 1}}>
                    Страна:
                </Typography>
                <Typography gutterBottom variant="h6" component="div">
                    {movieInfo.Country}
                </Typography>
            </Box>
            <Box sx={{display: 'flex'}}>
                <Typography gutterBottom variant="h6" component="div" sx={{color: 'gray', marginRight: 1}}>
                    Директор:
                </Typography>
                <Typography gutterBottom variant="h6" component="div">
                    {movieInfo.Director}
                </Typography>
            </Box>
            <Box sx={{display: 'flex'}}>
                <Typography gutterBottom variant="h6" component="div" sx={{color: 'gray', marginRight: 1}}>
                    Жанр:
                </Typography>
                <Typography gutterBottom variant="h6" component="div">
                    {movieInfo.Genre}
                </Typography>
            </Box>
            <Box sx={{display: 'flex'}}>
                <Typography gutterBottom variant="h6" component="div" sx={{color: 'gray', marginRight: 1}}>
                    Дата выхода:
                </Typography>
                <Typography gutterBottom variant="h6" component="div">
                    {movieInfo.Released}
                </Typography>
            </Box>
            <Box sx={{display: 'flex'}}>
                <Typography gutterBottom variant="h6" component="div" sx={{color: 'gray', marginRight: 1}}>
                    Рейтинг IMDB:
                </Typography>
                <Typography gutterBottom variant="h6" component="div">
                    {movieInfo.imdbRating}
                </Typography>
            </Box>
            <Box sx={{display: 'flex'}}>
                <Typography gutterBottom variant="h6" component="div" sx={{color: 'gray', marginRight: 1}}>
                    Проголосовало:
                </Typography>
                <Typography gutterBottom variant="h6" component="div">
                    {movieInfo.imdbVotes}
                </Typography>
            </Box>
        </Box>
    )
}