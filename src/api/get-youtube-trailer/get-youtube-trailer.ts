import {youTubeApi} from "../api.ts";

const youTubeKey = 'AIzaSyDu0P-iPruZKZrHfgwY-JGjt6Ke1RxHTzc';

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