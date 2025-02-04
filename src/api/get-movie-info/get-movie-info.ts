import {api} from "../api.ts";
import {IMovie} from "../../interfaces/movie-info.ts";

export const getMovieInfo = async (
    id: string
) => {
    const { data } = await api.get<IMovie>(``, {
        params: {
            i: id
        }
    })

    return data;
}