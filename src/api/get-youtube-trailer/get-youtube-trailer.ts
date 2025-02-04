import {youTubeApi} from "../api.ts";

const youTubeKey = 'AIzaSyBhGC5ojqLta6bK2wltuC59g7R5BZIS55s';

interface Props {
    movieTitle: string | null;
    year: string | null;
}

export const getYoutubeTrailer = async ({movieTitle, year}: Props) => {
    const { data } = await youTubeApi.get('/search', {
        params: {
            q: `${movieTitle} ${year} trailer`,
            type: 'video',
            part: 'snippet',
            key: youTubeKey,
        }
    })

    return data;
}