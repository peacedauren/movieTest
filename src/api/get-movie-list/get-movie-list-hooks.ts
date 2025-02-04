import {useQuery} from "@tanstack/react-query";
import {getMovieList} from "./get-movie-list.ts";
import {IMovieList} from "../../interfaces/movie-array.ts";

interface Props {
    name: string;
    page: number | null;
}

interface Error {
    name: string;
    message: string;
    stack?: string;
}

export const useMovieList = ({name, page}: Props) => {
    const {data, refetch, isLoading, isError} = useQuery<IMovieList, Error>({
        queryFn: () => getMovieList({name, page}),
        queryKey: ['movieList', name, page]
    });

    return { data, refetch, isLoading, isError };
}