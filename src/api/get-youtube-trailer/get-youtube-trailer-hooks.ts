import {useQuery} from "@tanstack/react-query";
import {getYoutubeTrailer} from "./get-youtube-trailer.ts";

interface Props {
    movieTitle: string | null;
    year: string | null;
}

export const useYoutubeTrailer = ({movieTitle, year}: Props) => {
    const { data, refetch, isLoading, isError } = useQuery({
        queryFn: () => getYoutubeTrailer({movieTitle, year}),
        queryKey: ['youTubeTrailer', year, movieTitle]
    })

    return { data, refetch, isLoading, isError };
}