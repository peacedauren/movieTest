import {youTubeApi} from "../api.ts";

const youTubeKey = 'AIzaSyA3eiRpyWcr_bAl9czYI0GYuA04d9niJSM';

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