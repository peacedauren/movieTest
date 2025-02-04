import {api} from "../api.ts";
import {IMovieList} from "../../interfaces/movie-array.ts";

interface Props {
    name: string,
    page: number | null
}

export const getMovieList = async (
    {name, page}: Props
) => {
    const { data } = await api.get<IMovieList>(``, {
        params: {
            s: name,
            page: page
        }
    })

    return data;
}