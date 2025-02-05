import {Box, Button, Container, TextField} from "@mui/material";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import {movieTitle} from "../../store/serch-input-store/search-input-store.tsx";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import {useLocation, useNavigate} from "react-router-dom";

export const Header = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const handleNavigate = (link?: string) => {
        navigate(`/${link}`);
    }
    return(
        <Container className="header__container">
            <Box className="header__inner">
                <Box
                    className="header__logo"
                    onClick={() => handleNavigate('')}><LiveTvIcon
                    sx={{color: 'red', marginRight: 1}}
                    fontSize={'large'}
                />
                    <Box>Movie List</Box>
                </Box>
                <TextField
                    className="header__search-input"
                    id="standard-basic"
                    defaultValue={movieTitle.movieTitle}
                    label="Название фильма"
                    variant="standard"
                    onChange={(e) => movieTitle.setMovieTitle(e.target.value)}
                    disabled={location.pathname !== '/'}
                />
                <Box>
                    <Button onClick={() => handleNavigate('favorites')}><FavoriteBorderIcon fontSize={'large'} /></Button>
                </Box>
            </Box>
        </Container>
    )
}