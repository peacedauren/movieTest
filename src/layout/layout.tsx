import './styles.scss';
import {Box, Button, Container, TextField} from "@mui/material";
import LiveTvIcon from '@mui/icons-material/LiveTv';
import {movieTitle} from "../store/serch-input-store/search-input-store.tsx";
import {useLocation, useNavigate} from "react-router-dom";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

interface ILayout {
    children?: React.ReactNode;
}

export const Layout = ({children}: ILayout) => {
    const location = useLocation();
    const navigate = useNavigate();

    const handleNavigate = (link?: string) => {
        navigate(`/${link}`);
    }

    return(
        <>
            <header className="header">
                <Container className="header__container">
                    <Box className="header__inner">
                        <Box
                            className="header__logo"
                            onClick={() => handleNavigate('')}><LiveTvIcon
                            style={{color: 'red'}}
                            fontSize={'large'}
                        />
                            Movie List
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
            </header>
            <main style={{minHeight: 'calc(100vh - 166px)'}}>{children}</main>
            <footer className="footer">
                <Container sx={{display: 'flex', alignItems: 'center', height: '100%'}}>
                    <Box>Abilassym Dauren</Box>
                </Container>
            </footer>
        </>
    )
}