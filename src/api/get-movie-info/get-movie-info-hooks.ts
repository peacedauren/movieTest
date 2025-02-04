import {useQuery} from "@tanstack/react-query";
import {getMovieInfo} from "./get-movie-info.ts";
import {IMovie} from "../../interfaces/movie-info.ts";

interface Props {
    id: string;
}

interface Error {
    name: string;
    message: string;
    stack?: string;
}

export const useMovieInfo = ({id}: Props) => {
    const {data, refetch, isLoading, isError} = useQuery<IMovie, Error>({
        queryFn: () => getMovieInfo(id),
        queryKey: ['movieInfo']
    });

    return { data, refetch, isLoading, isError };
}